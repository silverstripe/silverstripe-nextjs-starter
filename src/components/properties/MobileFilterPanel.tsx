import { Fragment } from "react"
import useUIStateContext from "../../context/useUIstateContext"
import {
  Dialog,
  Transition,
} from "@headlessui/react"
import {
  XIcon,
} from "@heroicons/react/outline"
import MobileFilterForm from "./MobileFilterForm"
import { AvailableFilter } from "../../../pages/properties"

 
interface Props {
  filters: Array<AvailableFilter>
}

const MobileFilterPanel = ({ filters }: Props): JSX.Element => {
  const { mobileFiltersOpen, setMobileFiltersOpen } = useUIStateContext()

  return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 sm:hidden"
        onClose={setMobileFiltersOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <MobileFilterForm filters={filters} />
          </div>
          
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileFilterPanel
