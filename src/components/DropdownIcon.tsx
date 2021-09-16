import React from "react"
import { Popover } from "@headlessui/react"
import classNames from "utils/classNames"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { useUIState } from "context/uiState"

interface Props {
  open?: boolean
  onClick?: () => void
}

const DropdownIcon = ({ open = false, onClick }: Props): JSX.Element => {
  return (
    <Popover.Button
      className={classNames(
        open ? "text-gray-900" : "text-gray-500",
        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none"
      )}
    >
      <ChevronDownIcon
        className={classNames(
          open ? "text-gray-600" : "text-gray-400",
          "ml-2 h-5 w-5 group-hover:text-gray-500"
        )}
        aria-hidden="true"
        onClick={onClick}
      />
    </Popover.Button>
  )
}

export default DropdownIcon
