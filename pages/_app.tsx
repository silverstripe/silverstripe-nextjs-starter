import React from "react"
import "../styles/scss/app.scss"
import type { AppProps } from "next/app"
import { StaticQueryContext } from "../lib/staticQuery/StaticQueryContext"
import staticQueries from "../.cache/.staticQueries.json"

function MyApp({ Component, pageProps }: AppProps) {
  return (    
    <StaticQueryContext.Provider value={staticQueries}>
      <Component {...pageProps} />
    </StaticQueryContext.Provider>
  )
}
export default MyApp
