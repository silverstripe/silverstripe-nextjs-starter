import { PropsWithChildren, useState } from "react"
import { FilterOption } from "../../pages/properties"
import { AppliedFilter } from "../components/properties/ActiveFilters"
import {
    Context as UIStateContext,
    UIStateContext as UIStateContextType,
  } from "../context/UIStateContext"
  
const StateProvider = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const [activeFilters, setActiveFilters] = useState<Array<AppliedFilter>>([])
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const uiState: UIStateContextType = {
      // Global
      sideMenuOpen,
      setSideMenuOpen(bool) {
        setSideMenuOpen(bool)
      },
      toggleSideMenuOpen() {
        setSideMenuOpen(!sideMenuOpen)
      },

      // Property list
      activeFilters,
      
      setFilterActive(appliedFilter: AppliedFilter, shouldBeActive: boolean) {
        const isActive = !!activeFilters.find(({ value, type }) => (
          appliedFilter.type == type && appliedFilter.value == value
        ))
        if (isActive && shouldBeActive || !isActive && !shouldBeActive) {
          return
        }
        if (shouldBeActive) {
          setActiveFilters([
            ...activeFilters,
            appliedFilter
          ])
        } else {
          setActiveFilters(activeFilters.filter(({ type, value }) => (
              appliedFilter.type !== type || appliedFilter.value !== value
          )))
        }
      },

      isFilterActive(filter: AppliedFilter) {
        return !!activeFilters.find(({type, value}) => (
          filter.type === type && filter.value === value
        ))        
      },

      mobileFiltersOpen,

      setMobileFiltersOpen(open: boolean) {
        setMobileFiltersOpen(open)
      }
    }

    return (
        <UIStateContext.Provider value={uiState}>
            {children}
        </UIStateContext.Provider>
    )
}

export default StateProvider