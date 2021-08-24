// @ts-ignore
import glob from "glob"
import cache from "../cache/cache"
import path from "path"

// Remove once we figure out how to include types.d.ts in the prebuild
interface StringMap {
    [key: string]: string
}

export const createName = (absPath: string): string => {
    const match = path.basename(absPath).match(/^[A-Za-z0-9_]+/)
    if (!match) {
        throw new Error(`Invalid filename ${absPath}`)
    }

    const candidate = match[0]
    if ([`props`, `component`, `query`].includes(candidate)) {
        return path.basename(path.dirname(absPath))
    }

    return candidate
}

const TEMPLATES_PATH = `${process.cwd()}/src/templates/**/*.{js,jsx,ts,tsx}`

export const collectTemplates = (pattern: string = TEMPLATES_PATH): StringMap => {
    const existing = cache.loadJSON(TEMPLATES_PATH)
    if (existing) {
        return existing
    }
    const nameToPath: StringMap = {}
    
    const result = glob.sync(pattern, { absolute: true });
    result.filter((absPath: string) => (
        !absPath.match(/\.props\.(js|ts)$/)) &&
        !absPath.match(/\/props\.(js|ts)$/)
    )
        .forEach((absPath: string) => {
            nameToPath[createName(absPath)] = absPath
        })

    cache.saveJSON(TEMPLATES_PATH, nameToPath)
    
    return nameToPath
};

const QUERIES_PATH = `${process.cwd()}/src/**/*.graphql`

export const collectQueries = (pattern: string = QUERIES_PATH): StringMap => {
    const existing = cache.loadJSON(QUERIES_PATH)
    
    if (existing) {
        return existing
    }

    const nameToPath: StringMap = {}
    const result = glob.sync(pattern, { absolute: true });
    
    for (const absPath of result) {
        const rel = path.relative(`${process.cwd()}/src`, absPath)
        if (!rel.startsWith(`fragments`)) {
            nameToPath[createName(absPath)] = absPath
        }
    }

    cache.saveJSON(QUERIES_PATH, nameToPath)

    return nameToPath
};

const PROPS_PATHS = [
    `${process.cwd()}/src/**/*.props.{js,ts}`,
    `${process.cwd()}/src/**/props.{js,ts}`,
]

export const collectGetProps = (patterns: Array<string> = PROPS_PATHS): StringMap => {
    const key = JSON.stringify(PROPS_PATHS)
    const existing = cache.loadJSON(key)
    
    if (existing) {
        return existing
    }

    const nameToPath: StringMap = {}
    let results: Array<string> = [];
    patterns.forEach(pattern => {
        results = [
            ...results,
            ...glob.sync(pattern, { absolute: true })
        ] 
    })
    for (const absPath of results) {
        const rel = path.relative(`${process.cwd()}/src`, absPath)
        if (!rel.startsWith(`fragments`)) {
            nameToPath[createName(absPath)] = absPath
        }
    }

    cache.saveJSON(key, nameToPath)

    return nameToPath
};


export const collectElementalBlocks = (baseDir: string): StringMap => {
    const pattern = `${process.cwd()}/src/${baseDir}/**/*.{js,jsx,ts,tsx}`
    const existing = cache.loadJSON(pattern)
    if (existing) {
        return existing
    }
    const nameToPath: StringMap = {}
    
    const result = glob.sync(pattern, { absolute: true });
    result.forEach((absPath: string) => {
        nameToPath[createName(absPath)] = absPath
    })

    cache.saveJSON(pattern, nameToPath)

    return nameToPath
};

