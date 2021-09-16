import React, { useEffect, useRef } from "react"
import { Popover } from "@headlessui/react"
import { XIcon, GlobeIcon } from "@heroicons/react/outline"
import { useUIState } from "context/uiState"
import { PageInterface } from "ss-schema"
import SlideDownAnimation from "animations/SlideDownAnimation"
import PopInAnimation from "animations/PopInAnimation"
import MenuItem from "./MenuItem"
import DropdownIcon from "./DropdownIcon"
import { Navigation } from "@silverstripe/nextjs-toolkit"
import { useRouter } from "next/router"
import Link from "next/link"

interface Props {
  menuItems: Array<PageInterface>
}

const MobileNav = ({ menuItems }: Props): JSX.Element => {
  const ui = useUIState()
  const router = useRouter()
  useEffect(() => {
    ui.initURL(router.asPath)
    router.events.on(`routeChangeComplete`, ui.initURL)
    return () => {
      router.events.off(`routeChangeComplete`, ui.initURL)
    }
  }, [])

  return (
    <PopInAnimation>
      <Popover.Panel
        focus
        className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
      >
        {({ close }) => (
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <GlobeIcon className="h-8 w-auto sm:h-10 text-yellow-400" />
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
                <Navigation items={menuItems} router={router}>
                  {(item, state) =>
                    !state.hasChildren ? (
                      <MenuItem
                        mobile={true}
                        link={item.link}
                        title={item.menuTitle!}
                        key={state.key}
                        onClick={() => close()}
                      />
                    ) : (
                      <Popover className="relative" key={state.key}>
                        {({ open }) => (
                          <>
                            <div className="flex">
                              <MenuItem
                                mobile={true}
                                link={item.link}
                                title={item.menuTitle!}
                                key={item.hashID}
                                onClick={() => close()}
                              />
                              <DropdownIcon open={open} onClick={() => {
                                ui.toggleMenuItem(item.link.replace(/^\//, ``))
                              }} />
                            </div>
                            <SlideDownAnimation show={ui.isMenuItemOpen(item.link.replace(/^\//, ``))}>
                              <Popover.Panel className="ml-8 my-4" static>
                                <Navigation
                                  items={state.children}
                                  router={router}
                                >
                                  {(child, childState) => (
                                    <Link
                                      href={child.link}
                                      key={childState.key}
                                    >
                                      <a
                                        onClick={() => close()}
                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                      >
                                        <div className="ml-4">
                                          <p className="text-base font-medium text-gray-900">
                                            {child.menuTitle}
                                          </p>
                                        </div>
                                      </a>
                                    </Link>
                                  )}
                                </Navigation>
                              </Popover.Panel>                            
                              </SlideDownAnimation>
                          </>
                        )}
                      </Popover>
                    )
                  }
                </Navigation>
              </Popover.Group>
            </div>
          </div>
        )}
      </Popover.Panel>
    </PopInAnimation>
  )
}

export default MobileNav
