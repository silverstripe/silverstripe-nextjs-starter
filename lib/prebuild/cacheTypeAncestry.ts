import api from "../graphql/api"
import cache from "../cache/cache"

export default async (): Promise<void> => {
    const BUILD_QUERY = `
    query StaticBuild {
        staticBuild {
            typeAncestry {
                type
                ancestry
            }
        }

    }
    `
    return api.query(BUILD_QUERY)
        .then(({ staticBuild: { typeAncestry } }) => {
            const ancestryMap: { [key: string]: Array<string> } = {}
            typeAncestry.forEach((result: { type: string, ancestry: Array<string> }) => {
                ancestryMap[result.type] = result.ancestry
            })  
            cache.writeFile(`.typeAncestry.json`, JSON.stringify(ancestryMap))

        })
}
