import React, { useContext } from "react"

export interface UIStateContext {
    isMenuItemOpen: (link: string) => boolean
    toggleMenuItem: (link: string) => void
    initURL: (url: string) => void
}

const initialValue: UIStateContext = {
    isMenuItemOpen: (link) => false,
    toggleMenuItem: (link) => {},
    initURL: (url) => {},
}

export const Context = React.createContext<UIStateContext>(initialValue)

export const useUIState = (): UIStateContext => {
    const state = useContext(Context)
    
    return state
}

