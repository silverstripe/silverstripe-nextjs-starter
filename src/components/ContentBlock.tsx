import React from 'react'
import HTMLElement from '../../lib/components/HTMLElement'

interface Props {
    content: string
}

const ContentBlock = (props: Props): JSX.Element => {
    return (
        <div className="my-8">
            <HTMLElement html={props.content} />
        </div>
    )
}

export default ContentBlock
