import React from "react"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon, HomeIcon } from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import useUIStateContext from "../context/useUIstateContext"
import Logo from "./Logo"
import Link from "next/link"
import classNames from "../utils/classNames"

const navigation = [
  { name: "Properties", href: "/properties" },
  { name: "Blog", href: "/blog" },
  {
    name: "About Us",
    href: "/about-us",
    children: [
      {
        name: "Our team",
        href: "/team",
      },
      {
        name: "Privacy policy",
        href: "#",
      },
      {
        name: "Terms and conditions",
        href: "#",
      },
    ],
  },
  { name: "Contact Us", href: "/contact" },
]

interface Props {}

const MobileNav = (props: Props): JSX.Element => {
  const ui = useUIStateContext()
  return (
    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <HomeIcon className="h-8 w-auto sm:h-10 text-yellow-400" />
            </div>
            <div className="-mr-2">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="pt-5 pb-6">
            <Popover.Group className="px-2 space-y-1">
              {navigation.map(item =>
                !item.children ? (
                  <Link href={item.href} key={item.name}>
                    <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </a>
                  </Link>
                ) : (
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <div className="flex">
                          <Link href={item.href} key={item.name}>
                            <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                              {item.name}
                            </a>
                          </Link>
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
                            />
                          </Popover.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="ml-8 my-4">
                                {(item.children ?? []).map((item: any) => (
                                  <Link href={item.href} key={item.name}>                                      
                                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          Description goes here
                                        </p>
                                      </div>
                                    </a>
                                  </Link>
                                ))}
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                )
              )}
            </Popover.Group>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}

export default MobileNav
