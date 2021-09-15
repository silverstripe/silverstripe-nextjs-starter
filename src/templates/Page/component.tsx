import React from "react"
import PageLayout from "layouts/PageLayout"
import ElementalArea from "components/elements/ElementalArea"
import { PageProps } from "types"

const Page: React.FC<PageProps> = ({ query: { readOnePage }}) => {
    if (!readOnePage) {
        console.error(`Page query for component at ${__filename} returned null`)
        return null
    }
    const elements = readOnePage?.elementalArea?.elements.nodes ?? []
    return (
        <PageLayout page={readOnePage}>
            <h2>{readOnePage.title}</h2>
            <ElementalArea elements={elements} />
        </PageLayout>
    )
}

export default Page