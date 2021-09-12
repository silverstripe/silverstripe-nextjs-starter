import { createNavigationUtils } from "@silverstripe/nextjs-toolkit"
import React, { useContext } from "react"
import { PageUnion } from "types"

const PageContext = React.createContext<PageUnion | null>(null)

function usePageContext() {
  const page = useContext(PageContext)

  return page
}

const {
  getChildren,
  hasChildren,
  isLevel,
  getLevel,
  isSection,
  inSection,
  getPeers,
} = createNavigationUtils<PageUnion>()

export {
    PageContext,
    usePageContext,
    getChildren,
    hasChildren,
    isLevel,
    getLevel,
    isSection,
    inSection,
    getPeers,
}
