import { PageInterface } from "../../graphql"
import { PageUnion } from "../../types"

type Linkable = { link: string }

export const getLevel = <T extends Linkable>(page: T): number => {
    if (!page.link) {
        return 0
    }
    return page.link.split(`/`).length
}

export const isLevel = <T extends Linkable>(page: T, level: number): boolean => {
    return getLevel(page) >= level
}

export const getChildren = (page: PageInterface): Array<PageUnion> => {    
    const children = page.navChildren?.nodes ?? []
    return children.map(child => ({
        ...child,
        link: linkify(child.link)
    }))
}

export const getPeers = (page: PageInterface): Array<PageUnion> => {
    return page.navParent?.navChildren?.nodes ?? []
}

export const hasChildren = (page: PageInterface): boolean => {
    return getChildren(page).length > 0
}

export const inSection = <T extends Linkable >(page: T, section: string): boolean => {
    return page.link.startsWith(`${section}/`)
}

export const isSection = <T extends Linkable>(page: T, section: string): boolean => {
    return section.startsWith(`${page.link}/`)
}

export const linkify = (link: string): string => {
    const clean = link.replace(/^\/|\/$/g, ``)
    if (!clean) {
        return `/`
    }
    return clean
}