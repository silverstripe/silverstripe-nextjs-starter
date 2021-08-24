import api from '../lib/graphql/api';
import ssConfig from '../ss.config'
import path from 'path'
import fs from 'fs'

interface FragmentResult {
    type: string
    fragment: string
}

const query = `
query PageFragments($baseClass: String!, $baseFields: [String!]) {
    generateFragments(baseClass: $baseClass, baseFields: $baseFields) {
        type
        fragment
    }

}
`
const variables = {
    baseClass: "Page",
    includeBase: true,
}

const ignore = ssConfig.page?.ignore ?? []
const absComponentsPath = path.join(process.cwd(), `src/templates`)
const absPageTemplatePath = path.join(process.cwd(), `lib/templates/page.template`)
const absQueryPath = path.join(process.cwd(), `lib/templates/pageQuery.template`)
const absElementalPageTemplatePath = path.join(process.cwd(), `lib/templates/elementalPage.template`)

const requiredTemplates = [absPageTemplatePath, absElementalPageTemplatePath, absQueryPath]
requiredTemplates.forEach((templatePath: string) => {
    if (!fs.existsSync(templatePath)) {
        throw new Error(`Template ${templatePath} does not exist`)
    }
})

const templateContents = ssConfig.elemental.enabled
    ? fs.readFileSync(absElementalPageTemplatePath, { encoding: `utf8` })
    : fs.readFileSync(absPageTemplatePath, { encoding: `utf8` })

const queryContents = fs.readFileSync(absQueryPath, { encoding: `utf8` })

api.queryUncached(query, variables).then((result) => {
    result.generateFragments.forEach((result: FragmentResult) => {
        if (ignore.includes(result.type)) {
            return
        }

        const pageDir = path.join(absComponentsPath, result.type)
        fs.mkdirSync(pageDir, { recursive: true })
        
        const componentPath = path.join(pageDir, `component.tsx`)
        
        const queryName = `readOne${result.fragment ? result.type : `Page`}`

        // If no component exists for this block, create it
        if (!fs.existsSync(componentPath)) {
            const code = templateContents
                .replace(/<%templateName%>/g, result.type)
                .replace(/<%queryName%>/g, queryName)
            fs.writeFileSync(componentPath, code)

            console.log(`Generated new component for ${result.type}`)
        }
        
        const target = path.join(pageDir, `query.graphql`)
        
        // If the query exists already, don't overwrite it
        if (fs.existsSync(target)) {
            return
        }
        
        const query = queryContents
            .replace(/<%queryName%>/g, queryName)
            .replace(/<%operationName%>/g, `${queryName.charAt(0).toUpperCase()}${queryName.slice(1)}`)
        fs.writeFileSync(target, query)
        console.log(`Wrote new query for ${result.type}`)

    })

})