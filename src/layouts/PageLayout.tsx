import React, { PropsWithChildren } from "react"
import { PageContext } from "lib"
import { PageUnion } from "types"
import MainMenu from "components/MainMenu"
import Header from "components/Header"
import Footer from "components/Footer"

import Head from "next/head"
interface Props {
  page?: PageUnion | null
}

const PageLayout = ({
  children,
  page = null,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <PageContext.Provider value={page}>
      <Head>
        <title>{page?.metaTitle ?? page?.title}</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </PageContext.Provider>
  )
}

export default PageLayout
