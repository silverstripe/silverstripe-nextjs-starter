import { HTMLElement } from "@silverstripe/nextjs-toolkit"
import React from "react"
import { ElementContent } from "ss-schema"

const Block: React.FC<{ element: ElementContent }> = ({ element }) => {

    return (
        <div>
            {element.showTitle && <h3>{element.title}</h3>}
            <HTMLElement html={element.html} />
        </div>
    )

}

export default Block