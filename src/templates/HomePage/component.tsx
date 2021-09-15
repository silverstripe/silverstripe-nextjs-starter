import React from "react"
import PageLayout from "layouts/PageLayout"
import { PageProps } from "types"
import { HTMLElement } from "@silverstripe/nextjs-toolkit"

const Page: React.FC<PageProps> = ({ query: { readOneHomePage } }) => {
  if (!readOneHomePage) {
    console.error(`Home page query failed`)
    return null
  }
  const { heroImage, heroHeadline, heroSubheadline, heroLink } = readOneHomePage

  return (
    <PageLayout page={readOneHomePage}>
      <main className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          {heroImage && (
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={heroImage?.absoluteLink!}
                    alt={heroImage.title!}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-600 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">{heroHeadline}</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
                    {heroSubheadline}
                  </p>
                  {heroLink && (
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div className="space-y-4 sm:space-y-0 sm:mx-auto">
                        <a
                          href={heroLink?.link}
                          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-400 hover:bg-gray-300 sm:px-8"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="mt-5 prose prose-indigo text-gray-500">
            <HTMLElement html={readOneHomePage.content} />
          </div>
        </div>
      </main>
    </PageLayout>
  )
}

export default Page
