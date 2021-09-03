import React from "react"
import { FilterOption } from "../../pages/properties"
import { AppliedFilter } from "../components/properties/ActiveFilters"

export interface UIStateContext {
    // Global
    sideMenuOpen: boolean
    setSideMenuOpen: (open: boolean) => void
    toggleSideMenuOpen: () => void

    // Property list view
    activeFilters: Array<AppliedFilter>
    setFilterActive: (filter: AppliedFilter, active: boolean) => void
    isFilterActive: (filter: AppliedFilter) => boolean
    mobileFiltersOpen: boolean,
    setMobileFiltersOpen: (open: boolean) => void
}

const initialValue: UIStateContext = {
    sideMenuOpen: false,
    setSideMenuOpen(bool) {},
    toggleSideMenuOpen() {},
    activeFilters: [],
    setFilterActive(appliedFilter) {},
    isFilterActive(filter) { return false },
    mobileFiltersOpen: false,
    setMobileFiltersOpen: (open) => {},
}

export const Context = React.createContext<UIStateContext>(initialValue)

