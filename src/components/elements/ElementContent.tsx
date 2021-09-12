import React from "react"
import { ElementContent } from "ss-schema"

const Block: React.FC<{ element: ElementContent }> = ({ element }) => {

    return <div>{element.__typename}</div>

}

export default Block