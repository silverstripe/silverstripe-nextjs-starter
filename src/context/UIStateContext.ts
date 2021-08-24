import React from "react"

export interface UIStateContext {
    sideMenuOpen: boolean
    setSideMenuOpen: (open: boolean) => void
}

const initialValue: UIStateContext = {
    sideMenuOpen: false,
    setSideMenuOpen(bool) {},
}

export const Context = React.createContext<UIStateContext>(initialValue)

