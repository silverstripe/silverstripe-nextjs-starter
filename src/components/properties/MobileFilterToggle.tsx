import React from "react"
import useUIStateContext from "../../context/useUIstateContext"

interface Props {}

const MobileFilterToggle = (props: Props): JSX.Element => {
  const { setMobileFiltersOpen } = useUIStateContext()
  return (
    <button
      type="button"
      className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
      onClick={() => setMobileFiltersOpen(true)}
    >
      Filters
    </button>
  )
}

export default MobileFilterToggle
