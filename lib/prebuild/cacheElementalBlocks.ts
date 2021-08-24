import { relative } from "path"
import cache from "../cache/cache"
import { collectElementalBlocks } from "../build/collectors"
import ssConfig from "../../ss.config"

// Remove once we figure out how to include types.d.ts in the prebuild
interface StringMap {
    [key: string]: string
}

export default async (): Promise<void> => {
    if (!ssConfig.elemental.enabled) {
        return Promise.resolve()
    }
    const dir = ssConfig.elemental.componentsPath ?? `components/elements`    
    const availableBlocks = collectElementalBlocks(dir)
    const output = [`/** GENERTATED CODE -- DO NOT MODIFY **/`]        
    output.push(`import dynamic from "next/dynamic"`)

    for (const name in availableBlocks) {
        const absPath = availableBlocks[name]
        const relPath = relative(cache.dir(), absPath)
        output.push(
    `const ${name} = dynamic(() => import('${relPath}'))`     
        )
    }

    output.push(`
    export default {
        ${Object.keys(availableBlocks).join(",\n\t")}    
    }
    `)
    cache.writeFile(`.elementalManifest.js`, output.join("\n"))

    return Promise.resolve()
}

