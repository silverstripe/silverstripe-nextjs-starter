import React from 'react'
import { Navigation, useStaticQuery } from "@silverstripe/nextjs-toolkit"
import { Query } from "ss-schema"
import Link from "next/link"
import { useRouter } from 'next/router'


const MainMenu = (): JSX.Element => {
    const router = useRouter()
    const menu = useStaticQuery<Query["readPages"]>(`
        query MainMenu {
            readPages(filter: {
                parentID: { eq: 0 },
                showInMenus: { eq: true }
            }) {
                nodes {
                    id
                    title
                    link
                    menuTitle
                }
            }
        }   
    `)
    const menuItems = menu?.readPages?.nodes ?? []
    return (
        <>
        <nav>
            <Navigation items={menuItems} router={router}>
                {(child, state) => {
                    return (
                        <div key={state.key}>
                            <Link href={child.link}>
                                <a className={state.linkingMode}>{child.menuTitle}</a>
                            </Link>
                        </div>
                    )
                }}
            </Navigation>
        </nav>
        <style jsx>{`
                nav {
                    display: flex;
                    gap: 1rem;
                }
                .current {
                    border-bottom: 2px solid;
                }
        `}</style>
        </>
    )
}

export default MainMenu
