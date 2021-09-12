import React, { PropsWithChildren } from "react"
import { PageContext } from "lib"
import { PageUnion } from "types"
import MainMenu from "components/MainMenu"
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
      <MainMenu />
      <div>{children}</div>
    </PageContext.Provider>
  )
}

export default PageLayout
