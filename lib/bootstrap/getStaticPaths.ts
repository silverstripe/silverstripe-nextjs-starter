import { GetStaticPaths } from "next"
import { Query } from "../../graphql"
import api, { createChunkFetch } from "../graphql/api";
import { STATIC_PAYLOAD_QUERY, TYPE_RESOLUTION_QUERY } from "../build/queries";
import getQueryForType from "../build/getQueryForType";
import bulkQuery from "../build/bulkQuery";
import { getQueryName, hasTopLevelField } from "../graphql/graphqlUtils";
import { parse } from "graphql"
import { linkify } from "../navigation/utils";

export const getStaticPaths: GetStaticPaths = async () => {
    const staticPayloadResult: Query = await api.query(
        STATIC_PAYLOAD_QUERY
    ) ?? null

    if (!staticPayloadResult) {
        console.warn(`Could not get a static build!`)
        return Promise.reject()
    }
    
    // Build a list of all the links that need to statically generated
    const links = staticPayloadResult.staticBuild?.links ?? []
    const paths: Array<{ params: { page: Array<string> } }> = [];
    links.forEach(link => {
        paths.push({ params: { page: link.link.split(`/`) }})
    })
    
    // Warm the cache for future interrogations of link => type
    const typeResolutionResult: Query = await api.query(
        TYPE_RESOLUTION_QUERY,
        { links: links.map(l => l.link) }
    )

    const typeToLinks = new Map<string, Set<string>>()
    const typeToQuery = new Map<string, string>()

    typeResolutionResult.typesForLinks.forEach(result => {
        api.warm(
            TYPE_RESOLUTION_QUERY,
            { links: [linkify(result.link)] },
            { typesForLinks: [{ link: result.link, type: result.type }] }
        )

        if (!typeToLinks.has(result.type)) {
            typeToLinks.set(result.type, new Set())
        }
        typeToLinks.get(result.type)?.add(result.link)
        
        // Capture the query for each type while we're here
        if (!typeToQuery.has(result.type)) {
            const query = getQueryForType(result.type)
            if (query) {
                typeToQuery.set(result.type, query)
            }
        }
    })

    // Bulk query caching
    for (let [type, links] of typeToLinks.entries()) {
        const singleQuery = typeToQuery.get(type)
        if (!singleQuery) {
            continue
        }
        const doc = parse(singleQuery)
        if (!hasTopLevelField(doc, `link`)) {
            console.warn(
                `Query ${getQueryName(doc)} does not have a link field in its selection set
                and is ineligible for bulk fetching.`
            )
            continue
        }
        // Rewrite the single record query to multiple, e.g. readOnePage => readPages
        const newQuery = bulkQuery(singleQuery)
        if (!newQuery) {
            continue
        }
        const newQueryName = getQueryName(parse(newQuery))
        if (!newQueryName) {
            continue
        }
        // Bulk fetch the records and warm the cache
        const fetch = createChunkFetch(newQuery, {
            limit: 25,
            links: [...links],
        })
        let chunk
        while (chunk = await fetch()) {
            const records = chunk[newQueryName]?.nodes ?? []        
            records.forEach(record => {
                const link = linkify(record.link as string)
                api.warm(singleQuery, { link }, record)
            })
        }
    }    

    return {
        paths,
        fallback: `blocking`
    }
}

export default getStaticPaths
