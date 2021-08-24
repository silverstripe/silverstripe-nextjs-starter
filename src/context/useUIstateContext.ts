import { useContext} from "react"

import { Context, UIStateContext } from "./UIStateContext"

const useUIStateContext = (): UIStateContext => {
    const state = useContext(Context)
    
    return state
}


export default useUIStateContext