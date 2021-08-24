import { GetStaticProps } from "next"
import { Query } from "../../graphql"
import api from "../graphql/api"
import { collectTemplates } from "../build/collectors"
import { resolveAncestry } from "../build/resolveAncestry"
import GET_PROPS from "../../.cache/.getPropsManifest"
import { TYPE_RESOLUTION_QUERY } from "../build/queries"
import TYPE_ANCESTRY from "../../.cache/.typeAncestry.json"
import bulkQuery from "../build/bulkQuery"
import getQueryForType from "../build/getQueryForType"
import { linkify } from "../navigation/utils"

const getStaticProps: GetStaticProps = async (props) => {
    const page = props?.params?.page ?? []
    let url
    if (Array.isArray(page)) {
        url = page.join(`/`)
    } else {
        url = page
    }
    
    url = linkify(url)
    
    if (url.match(/\.[^\/]+$/)) {
        console.log(`Not found:`, url)
        return {
            notFound: true
        }
    }
    const templates = Object.keys(collectTemplates())

    const typeResolutionResult: Query = await api.query(
        TYPE_RESOLUTION_QUERY,
        { links: [url] }
    )

    if (!typeResolutionResult || typeResolutionResult.typesForLinks.length === 0) {
        return {
            notFound: true
        }
    }

    const data = {
        query: null,
        extraProps: null,
    };

    const result = typeResolutionResult.typesForLinks[0]
    const { type } = result
    // @ts-ignore
    const ancestors = TYPE_ANCESTRY[type] ?? []

    const query = getQueryForType(type)

    if (query) {
        data.query = await api.query(query, { link: url }) ?? null
    }

    const propsKey = resolveAncestry(type, ancestors, Object.keys(GET_PROPS))
    // @ts-ignore
    const propsFunc = propsKey ? (GET_PROPS[propsKey] ?? null) : null
    if (propsFunc) {
        data.extraProps = await propsFunc(data.query)
    }

    const componentProps = {
        props: {
            data,
            type,
            templates,
        },
    }
    return componentProps
}

export default getStaticProps