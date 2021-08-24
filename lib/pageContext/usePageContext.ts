import { useContext } from "react"
import { PageContext, PageContextValue } from "./PageContext"

const usePageContext = (): PageContextValue => {
    const page = useContext(PageContext)
    
    return page
}


export default usePageContext