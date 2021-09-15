import React, { useContext } from "react"

export interface UIStateContext {
    // Global
    sideMenuOpen: boolean
    setSideMenuOpen: (open: boolean) => void
    toggleSideMenuOpen: () => void
}

const initialValue: UIStateContext = {
    sideMenuOpen: false,
    setSideMenuOpen(bool) {},
    toggleSideMenuOpen() {},
}

export const Context = React.createContext<UIStateContext>(initialValue)

export const useUIStateContext = (): UIStateContext => {
    const state = useContext(Context)
    
    return state
}

