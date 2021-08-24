import React from "react"
import { Query } from "../../graphql"

export type PageContextValue = Query["readOnePage"]

export const PageContext = React.createContext<PageContextValue>(null)

