import React, { PropsWithChildren, useState } from "react"
import {
  PageContext,
  PageContextValue,
} from "../../lib/pageContext/PageContext"
import Footer from "../components/Footer"
import Header from "../components/Header"
import StateProvider from "../state/StateProvider"

interface Props {
  page?: PageContextValue | null
}

const PageLayout = ({ children, page = null }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <StateProvider>
      <PageContext.Provider value={page}>
        <div className="min-h-screen flex flex-col">
          <Header />
            {children}          
          <Footer />
        </div>
      </PageContext.Provider>
    </StateProvider>
  )
}

export default PageLayout
