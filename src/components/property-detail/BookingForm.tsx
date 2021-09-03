import { Fragment, useState } from "react"
import {
  Dialog,
  Disclosure,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react"
import {
  HeartIcon,
  MenuIcon,
  MinusSmIcon,
  PlusSmIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import classNames from "../../utils/classNames"

interface Props {}

const BookingForm = (props: Props): JSX.Element => {
  return (
    <form className="mt-6">
      <div>
        <h3 className="text-sm text-gray-600">How many nights?</h3>

        <RadioGroup value={3} onChange={() => {}} className="mt-2">
          <RadioGroup.Label className="sr-only">
            How many nights?
          </RadioGroup.Label>
          <div className="flex items-center space-x-3">
            {[1, 2, 3, 4, 5, 6, 7].map(n => (
              <RadioGroup.Option
                key={n}
                value={n}
                className={({ active, checked }) =>
                  classNames(
                    active && checked ? "ring ring-offset-1" : "",
                    !active && checked ? "ring-2" : "",
                    "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                  )
                }
              >
                <RadioGroup.Label as="p" className="sr-only">
                  {n}
                </RadioGroup.Label>
                <span
                  aria-hidden="true"
                  className={classNames(
                    "h-8 w-8 border border-black border-opacity-10 rounded-full text-center relative"
                  )}
                >
                  {" "}
                  <span className="absolute inset-y-1 inset-x-0 text-sm">
                    {n}
                  </span>
                </span>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div className="mt-10 flex sm:flex-col1">
        <button
          type="submit"
          className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
        >
          Request a booking
        </button>

        <button
          type="button"
          className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
        >
          <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
          <span className="sr-only">Add to favorites</span>
        </button>
      </div>
    </form>
  )
}

export default BookingForm
