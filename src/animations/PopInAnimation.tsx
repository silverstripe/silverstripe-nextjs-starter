import { Transition } from "@headlessui/react"
import React, { PropsWithChildren, Fragment } from "react"

const PopInAnimation = ({ children }: PropsWithChildren<{}>): JSX.Element => {
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
      {children}
    </Transition>
  )
}

export default PopInAnimation
