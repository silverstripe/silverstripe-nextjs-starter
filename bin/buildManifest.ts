import ssConfig from "../ss.config";
import cache from "../lib/cache/cache"
import dotenv from 'dotenv';

dotenv.config()
cache.clear()

const preBuildSteps = (ssConfig.prebuild ?? [])
const promises = preBuildSteps.map(func => func())
Promise.all(promises)
    .then(() => {
        console.log(`Prebuild complete`)
    })


