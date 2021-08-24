import React, { useState } from "react"
import { PageContext, PageContextValue } from "../../lib/pageContext/PageContext"
import { Context as UIStateContext, UIStateContext as UIStateContextType } from "../context/UIStateContext"

interface Props {
  page: PageContextValue
}


const PageLayout: React.FC<Props> = ({ children, page }) => {

  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  
  const uiState: UIStateContextType = {
    sideMenuOpen,
    setSideMenuOpen(bool) {
      setSideMenuOpen(bool)
    },
  }
  return (
    <UIStateContext.Provider value={uiState}>
      <PageContext.Provider value={page}>
          {children}
      </PageContext.Provider>
    </UIStateContext.Provider>
  )
}

export default PageLayout
