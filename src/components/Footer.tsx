import React from "react"
import { GlobeIcon } from "@heroicons/react/solid"
import { useStaticQuery } from "@silverstripe/nextjs-toolkit"
import { Query } from "ss-schema"

const Footer = (): JSX.Element => {
  const data = useStaticQuery<Query["readPages"] & Query["readOneSiteConfig"]>(`
        query {
            readPages(filter: {
                parentID: { eq: 0 },
                showInMenus: { eq: true }
            }) {
                nodes {
                    hashID
                    link
                    menuTitle
                    navChildren {
                        nodes {
                            hashID
                            link
                            menuTitle
                        }
                    }
                }
            }
            readOneSiteConfig {
                title
                tagline
            }
        }
    `)

  const menuItems = data?.readPages?.nodes ?? []
  const title = data?.readOneSiteConfig?.title ?? ``
  const tagline = data?.readOneSiteConfig?.tagline ?? ``

  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <GlobeIcon className="h-10" />
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {title}
            </h3>

            <p className="text-gray-500 text-base">{tagline}</p>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <ul role="list" className="mt-4 space-y-4">
                {menuItems.map(item => (
                  <li key={item.hashID}>
                    <a
                      href={item.link}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.menuTitle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-8">
        <p className="text-base text-gray-400 xl:text-center">
          &copy; {title} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
