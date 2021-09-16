import React, { PropsWithChildren, useState } from "react"
import { PageContext } from "lib"
import { PageUnion } from "types"
import Header from "components/Header"
import Footer from "components/Footer"
import { UIStateContext, Context as UIState } from "context/uiState"

import Head from "next/head"
import createUIState from "state/createUIState"
interface Props {
  page?: PageUnion | null
}

const PageLayout = ({
  children,
  page = null,
}: PropsWithChildren<Props>): JSX.Element => {
  const [openMenuItems, setOpenMenuItems] = useState<Array<string>>([])
  const uiState = createUIState({ menu: { openMenuItems, setOpenMenuItems }})
  
  return (
    <PageContext.Provider value={page}>
      <UIState.Provider value={uiState}>
        <Head>
          <title>{page?.title}</title>
        </Head>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </UIState.Provider>
    </PageContext.Provider>
  )
}

export default PageLayout
