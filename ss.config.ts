import dotenv from "dotenv"
import {
  cacheGetProps,
  cacheTypeAncestry,
  cacheQueryManifest,
  cacheTemplateManifest,
  cacheStaticQueries,
  cacheElementalBlocks,
} from "./lib/prebuild"

import getBaseURL from "./lib/config/getBaseURL"
import getGraphQLEndpoint from "./lib/config/getGraphQLEndpoint"
import defaultPluraliser from "./lib/build/pluraliser"

dotenv.config()

interface StringMap {
  [key: string]: string
}

export interface ClientConfig {
  endpoint: string
  options: {
      [key: string]: string | StringMap
      headers: StringMap
  }
}

export default {
    prebuild: [
      cacheStaticQueries,
      cacheQueryManifest,
      cacheTypeAncestry,
      cacheTemplateManifest,
      cacheGetProps,
      cacheElementalBlocks,
    ],    

    elemental: {
      enabled: true,
      fragmentsPath: `fragments/elemental/elements`,
      componentsPath: `components/elements`,
    },

    query: {
      pluraliser: defaultPluraliser,
    },

    page: {
      ignore: [`RedirectorPage`, `ErrorPage`]
    },

    baseURL: getBaseURL(),
    
    client(): ClientConfig {
        const options: ClientConfig["options"] = {
            headers: {},
        }
        if (process.env.SILVERSTRIPE_BASIC_AUTH_KEY) {
          options.headers['Authorization'] = `Basic ${process.env.SILVERSTRIPE_BASIC_AUTH_KEY}`
        }
        if (process.env.SILVERSTRIPE_API_KEY) {
            options.headers['X-API-Key'] = process.env.SILVERSTRIPE_API_KEY
        }
  
        return {
            endpoint: getGraphQLEndpoint(),
            options,
        }
    }
}