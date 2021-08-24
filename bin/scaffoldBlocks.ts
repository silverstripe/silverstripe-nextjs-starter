import api from '../lib/graphql/api';
import ssConfig from '../ss.config'
import path from 'path'
import fs from 'fs'

interface FragmentResult {
    type: string
    fragment: string
}

const query = `
query BlockFragments($baseClass: String!, $baseFields: [String!]) {
    generateFragments(baseClass: $baseClass, baseFields: $baseFields) {
        type
        fragment
    }

}
`
const variables = {
    baseClass: "DNADesign\\Elemental\\Models\\BaseElement",
    includeBase: true,
}

const elementalFragmentPath = ssConfig.elemental?.fragmentsPath ?? `fragments/elemental/elements`
const elementalComponentsPath = ssConfig.elemental?.componentsPath ?? `components/elemental`

const absFragmentsPath = path.join(process.cwd(), `src/fragments`)
const absElementalFragmentsPath = path.join(process.cwd(), `src/${elementalFragmentPath}`)
const absElementalComponentsPath = path.join(process.cwd(), `src/${elementalComponentsPath}`)

const fragmentTemplatePath = path.join(process.cwd(), `lib/templates/elements.template`)
if (!fs.existsSync(fragmentTemplatePath)) {
    throw new Error(`Template ${fragmentTemplatePath} does not exist`)
}
const fragmentTemplateContents = fs.readFileSync(fragmentTemplatePath, { encoding: `utf8` })

const componentTemplatePath = path.join(process.cwd(), `lib/templates/block.template`)
if (!fs.existsSync(componentTemplatePath)) {
    throw new Error(`Template ${componentTemplatePath} does not exist`)
}
const componentTemplateContents = fs.readFileSync(componentTemplatePath, { encoding: `utf8` })

const schemaPath = path.relative(absElementalComponentsPath, `${process.cwd()}/graphql.ts`)


api.queryUncached(query, variables).then((result) => {
    const baseElement = result.generateFragments.filter((r: FragmentResult) => r.type === `BaseElement`)
    if (!baseElement) {
        throw new Error(`No BaseElement type could be found. Perhaps you're using a custom type name?`)
    }

    fs.mkdirSync(absElementalFragmentsPath, { recursive: true })
    fs.mkdirSync(absElementalComponentsPath, { recursive: true })    
    
    const baseFieldsPath = path.relative(absElementalFragmentsPath, `${absFragmentsPath}/BaseFields.graphql`)
    
    const imports: Array<string> = [
        `#import "${baseFieldsPath}`,
    ]
    const inlineFragments: Array<string> = [
        `\t...BaseFields`,
    ]

    result.generateFragments.forEach((result: FragmentResult) => {
        const isBase = result.type === `BaseElement`

        const componentPath = path.join(absElementalComponentsPath, `${result.type}.tsx`)
        
        // If no component exists for this block, create it
        if (!isBase && !fs.existsSync(componentPath)) {
            const code = componentTemplateContents
                .replace(/<%schemaPath%>/g, schemaPath.replace(/\.ts$/, ``))
                .replace(/<%typeName%>/g, result.type)
            fs.writeFileSync(componentPath, code)

            console.log(`Generated new component for ${result.type}`)
        }
        
        // Some blocks have no unique fields. Skip the fragment generation.
        if (!result.fragment) {
            console.log(`${result.type} has no unique fields. Skipping fragment generation.`)
            return
        }


        const basename = `${result.type}Fields.graphql`
        const target = path.join(absElementalFragmentsPath, basename)
        
        // Build up a list of required imports and fragments for the all-inclusive _elements.graphql
        imports.push(`#import "./${result.type}Fields.graphql"`)
        if (isBase) {
            inlineFragments.push(`\t...${result.type}Fields`)
        } else {
            inlineFragments.push(`
    ... on ${result.type} {
        ...${result.type}Fields
    }`)
        }

        // If the query exists already, don't overwrite it
        if (fs.existsSync(target)) {
            return
        }
        

        fs.writeFileSync(target, result.fragment)
        console.log(`Wrote new query for ${result.type}`)

    })

    const absElementsPath = path.join(absElementalFragmentsPath, `_elements.graphql`)
    let needsRegeneration = false
    if (!fs.existsSync(absElementsPath)) {
        needsRegeneration = true
    } else {
        const contents = fs.readFileSync(absElementsPath, { encoding: `utf8` })
        if (contents && contents.startsWith(`###--`)) {
            needsRegeneration = true
        }
    }

    if (needsRegeneration) {
        const generated = fragmentTemplateContents
            .replace(/<%imports%>/g, imports.join("\n"))
            .replace(/<%elements%>/g, inlineFragments.join("\n"))

        fs.writeFileSync(absElementsPath, generated)

        console.log(`Regenerated _elements.graphql file`)
    } else {
        console.log(`_elements.graphql file has been customised. Skipping regeneration.`)
    }

})