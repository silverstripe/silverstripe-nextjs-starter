import React from "react"
import parse, { HTMLReactParserOptions, attributesToProps } from "html-react-parser"
import { Element } from 'domhandler/lib/node';

const BASE_URL = process.env.SILVERSTRIPE_BASE_URL
const options: HTMLReactParserOptions = {
  replace: domNode => {
    if (domNode instanceof Element && domNode.tagName === `img`) {
        const props = attributesToProps(domNode.attribs)
        const originalSrc = (props.src ?? ``).replace(/^\/+/, ``)
        if (!originalSrc.match(/^https?:\/\//i)) {
            props.src = `${BASE_URL}/${originalSrc}`
        }
        return <img {...props} />
    }
  }
};
const HTMLElement: React.FC<{ html?: string | null }> = ({ html }) => {    
    if (!html) {
        return null
    }
    return <>{parse(html, options)}</>
}

export default HTMLElement