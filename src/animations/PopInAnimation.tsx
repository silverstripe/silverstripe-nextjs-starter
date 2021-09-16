import { Transition } from "@headlessui/react"
import React, { PropsWithChildren, Fragment } from "react"

interface Props {
  show?: boolean
}
const PopInAnimation = ({ children, show }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Transition
      as={Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      show={show}
    >
      {children}
    </Transition>
  )
}

export default PopInAnimation
