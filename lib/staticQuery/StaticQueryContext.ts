import React from "react"

export interface StaticQueryContextValue {
  [key: string]: unknown
}

export const StaticQueryContext = React.createContext<StaticQueryContextValue | null>(null)

