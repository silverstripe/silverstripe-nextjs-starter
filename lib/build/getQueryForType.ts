import TYPE_ANCESTRY from "../../.cache/.typeAncestry.json"
import QUERIES from "../../.cache/.queryManifest"
import { resolveAncestry } from "./resolveAncestry"

const getQueryForType = (type: string): string | null => {
    // @ts-ignore
    const ancestors = TYPE_ANCESTRY[type] ?? []
    const queriesKey = resolveAncestry(type, ancestors, Object.keys(QUERIES))
    // @ts-ignore
    return queriesKey ? (QUERIES[queriesKey]?.source ?? null) : null
}

export default getQueryForType
