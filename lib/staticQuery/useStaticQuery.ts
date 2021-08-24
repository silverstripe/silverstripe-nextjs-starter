import { useContext } from "react"
import { StaticQueryContext } from "./StaticQueryContext"
import { getCacheKey } from "../cache/getCacheKey"

const useStaticQuery = (gqlQuery: string): any => {
    const staticQueries = useContext(StaticQueryContext)
    const cacheKey = getCacheKey(gqlQuery)
    if (cacheKey) {
        return staticQueries![cacheKey] ?? null
    }

    return null
}


export default useStaticQuery