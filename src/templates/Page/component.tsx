import React from "react"
import PageLayout from "layouts/PageLayout"
import ElementalArea from "components/elements/ElementalArea"
import { PageProps } from "types"

const Page: React.FC<PageProps> = ({ query: { readOnePage } }) => {
  if (!readOnePage) {
    console.error(`Page query for component at ${__filename} returned null`)
    return null
  }
  const elements = readOnePage?.elementalArea?.elements.nodes ?? []
  return (
    <PageLayout page={readOnePage}>
      <main className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white">
          <div className="mt-5 prose prose-indigo text-gray-500">
            <h2 className="leading-6 text-gray-600 font-semibold tracking-wide uppercase">
              {readOnePage.title}
            </h2>
            <ElementalArea elements={elements} />
          </div>
        </div>
      </main>
    </PageLayout>
  )
}

export default Page
