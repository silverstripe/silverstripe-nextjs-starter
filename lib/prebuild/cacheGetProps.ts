import { collectGetProps } from "../build/collectors"
import { relative } from "path"
import cache from "../cache/cache"

export default async (): Promise<void> => {
    const availableFuncs = collectGetProps()
    const output = [`/** GENERTATED CODE -- DO NOT MODIFY **/`]        

    for (const name in availableFuncs) {
        const absPath = availableFuncs[name]
        const relPath = relative(cache.dir(), absPath)
        output.push(
    `import ${name} from "${relPath}"`
        )
    }

    output.push(`
    export default {
        ${Object.keys(availableFuncs).join(",\n\t")}    
    }
    `)
    cache.writeFile(`.getPropsManifest.js`,output.join("\n"))

    return Promise.resolve()
}
