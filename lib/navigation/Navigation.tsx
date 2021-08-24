import React from "react"
import { useRouter } from "next/dist/client/router"
import { hasChildren, isSection, getChildren, linkify } from "./utils"
import { PageUnion } from "../../types"
import { PageInterface } from "../../graphql"

export interface NavState {
    current: boolean
    linkingMode: "current" | "section" | "link"
    level: number
    first: boolean
    last: boolean
    even: boolean
    odd: boolean
    pos: number
    key: number | string
    hasChildren: boolean
    children: Array<PageUnion>
}

interface Props<T> {
    items: Array<T>
    children: (child: PageUnion, state: NavState) => React.ReactNode
}

const Navigation = <T extends PageInterface>({ items, children }: Props<T>): React.ReactElement => {
    const { asPath } = useRouter()
    
    const navItems = items.map((page, i) => {
        page.link = linkify(page.link)
        const current = page.link === asPath
        const section = isSection(page, asPath)
        const pos = i + 1
        const state: NavState = {
            current, 
            linkingMode: current ? `current` : (section ? `section` : `link`),
            pos: pos + 1,
            even: pos % 2 === 0,
            odd: pos % 2 === 1,
            first: pos === 1,
            last: pos === items.length,
            // todo: not a great heuristic. Maybe get this from the API
            level: page.link.split(`/`).length,
            key: page.id,
            hasChildren: hasChildren(page),
            children: getChildren(page),
        }
        return children(page, state)
    })
    return <>{navItems}</>
}

export default Navigation