import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { AvailableFilter } from "../../../pages/properties"
import useUIStateContext from "../../context/useUIstateContext"
import classNames from "../../utils/classNames"

interface Props {
  filters: Array<AvailableFilter>
}

const MobileFilterForm = ({ filters }: Props): JSX.Element => {
  const { isFilterActive, setFilterActive } = useUIStateContext()
  return (
    <form className="mt-4">
      {filters.map(section => (
        <Disclosure
          as="div"
          key={section.id}
          className="border-t border-gray-200 px-4 py-6"
        >
          {({ open }) => (
            <>
              <h3 className="-mx-2 -my-3 flow-root">
                <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400">
                  <span className="font-medium text-gray-900">
                    {section.name}
                  </span>
                  <span className="ml-6 flex items-center">
                    <ChevronDownIcon
                      className={classNames(
                        open ? "-rotate-180" : "rotate-0",
                        "h-5 w-5 transform"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className="pt-6">
                <div className="space-y-6">
                  {section.options.map((option, optionIdx) => {
                    const appliedFilter = { ...option, type: section.id }
                    return (
                      <div key={option.id} className="flex items-center">
                        <input
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type={section.isMulti ? `checkbox` : `radio`}
                          defaultChecked={isFilterActive(appliedFilter)}
                          onChange={e =>
                            setFilterActive(appliedFilter, e.target.checked)
                          }
                          className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-500"
                        >
                          {option.label}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </form>
  )
}

export default MobileFilterForm
