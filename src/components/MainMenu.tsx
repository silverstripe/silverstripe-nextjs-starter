import React from 'react'
import { Navigation, useStaticQuery } from "@silverstripe/nextjs-toolkit"
import { Query } from "ss-schema"
import Link from "next/link"
import { useRouter } from 'next/dist/client/router'

const MainMenu = (): JSX.Element => {
    const menu = useStaticQuery<Query["readPages"]>(`
        query MainMenu {
            readPages(filter: { parentID: { eq: 0 } }) {
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
    useRouter()
    return (
        <>
        <nav>
            <Navigation items={menuItems}>
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
        `}</style>
        </>
    )
}

export default MainMenu
