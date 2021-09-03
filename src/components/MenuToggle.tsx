import React from "react"
import { MenuIcon } from "@heroicons/react/outline"
import { Popover } from "@headlessui/react"
import useUIStateContext from "../context/useUIstateContext"

interface Props {}

const MenuToggle = (props: Props): JSX.Element => {
    const ui = useUIStateContext();
  return (
    <div className="-mr-2 -my-2 md:hidden">
      <Popover.Button onClick={() => ui.setSideMenuOpen(true)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <span className="sr-only">Open menu</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>
    </div>
  )
}

export default MenuToggle
