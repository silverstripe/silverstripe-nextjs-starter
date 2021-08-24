import getBaseURL from "./getBaseURL"

const getGraphQLEndpoint = (): string => {
    let path = process.env.SILVERSTRIPE_GRAPHQL_ENDPOINT ?? `graphql`
    path = path.replace(/^\/+/, ``)
    return `${getBaseURL()}/${path}`    
}

export default getGraphQLEndpoint