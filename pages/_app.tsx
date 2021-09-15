import React from "react"
import "../styles/app.css"
import type { AppProps } from "next/app"
import { StaticQueryContext } from "@silverstripe/nextjs-toolkit"
import cache from "cache"

function MyApp({ Component, pageProps }: AppProps) {
  return (    
    <StaticQueryContext.Provider value={cache.staticQueries}>
      <Component {...pageProps} />
    </StaticQueryContext.Provider>
  )
}
export default MyApp
