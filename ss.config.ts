import {
  getBaseURL,
  getGraphQLEndpoint,
  defaultConfig,
} from "@silverstripe/nextjs-toolkit"
import { ClientConfig, ProjectConfig } from "@silverstripe/nextjs-toolkit"


const config: ProjectConfig = {
    ...defaultConfig,
    elemental: {
      fragmentsPath: `fragments/elemental/elements`,
      componentsPath: `components/elements`,
    },
    
    page: {
      ignore: [`RedirectorPage`, `ErrorPage`, `VirtualPage`]
    },

    baseURL: getBaseURL(),

    baseDir: process.cwd(),
    
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

export default config