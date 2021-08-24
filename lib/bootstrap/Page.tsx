import React from "react"
import { resolveAncestry } from "../build/resolveAncestry"
import TYPE_ANCESTRY from "../../.cache/.typeAncestry.json"
import TEMPLATES from "../../.cache/.templateManifest"

interface Props {
    data: {
        [key: string]: unknown
    }
    type: string
    templates: Array<string>
}

const Page: React.FC<Props> = ({ data, type, templates }) => {
    // @ts-ignore
    const ancestors = TYPE_ANCESTRY[type] ?? []
    const key = resolveAncestry(type, ancestors, templates)
    // @ts-ignore
    const Component = key ? TEMPLATES[key] : null
    if (!Component) {
        throw new Error(`No template found for ${type} (resolved to "${key}")`);
    }

    return <Component {...data} />
}

export default Page
