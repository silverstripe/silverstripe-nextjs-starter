import React from "react"
import PageLayout from "layouts/PageLayout"
import { PageProps } from "types"

const Page: React.FC<PageProps> = ({ query: { readOneHomePage }}) => {
    return (
        <PageLayout page={readOneHomePage}>
            <h2>HomePage</h2>
        </PageLayout>
    )
}

export default Page