import React from "react"
import PageLayout from "layouts/PageLayout"
import ElementalArea from "components/elements/ElementalArea"
import { PageProps } from "types"

const Page: React.FC<PageProps> = ({ query: { readOnePage }}) => {
    const elements = readOnePage?.elementalArea?.elements.nodes ?? []
    return (
        <PageLayout page={readOnePage}>
            <ElementalArea elements={elements} />
        </PageLayout>
    )
}

export default Page