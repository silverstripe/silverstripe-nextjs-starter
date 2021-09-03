import { Fragment } from "react"
import { Popover } from "@headlessui/react"
import Link from "next/link"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { Transition } from "@headlessui/react"
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

const MainNav = (props: Props): JSX.Element => {
  return (
    <Popover.Group as="nav" className="hidden md:flex space-x-10">
      {navigation.map((item, itemIdx) =>
        !item.children ? (
          <Link href={item.href} key={itemIdx}>
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              {item.name}
            </a>
          </Link>
        ) : (
          <Popover className="relative flex">
            {({ open }) => (
              <>
                <Link href={item.href}>
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
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

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-50 -ml-4 mt-8 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
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
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        )
      )}
    </Popover.Group>
  )
}

export default MainNav
