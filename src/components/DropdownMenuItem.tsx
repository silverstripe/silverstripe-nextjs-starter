import { Fragment, PropsWithChildren } from "react"
import Link from "next/link"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { Popover, Transition } from "@headlessui/react"
import MenuItem from "./MenuItem"
import classNames from "utils/classNames"
import { PageInterface } from "ss-schema"
import SlideDownAnimation from "animations/SlideDownAnimation"
import DropdownIcon from "./DropdownIcon"

interface Props {
  title: string
  link: string
}
const DropdownMenuItem = ({ title, link, children }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Popover className="relative flex">
      {({ open }) => (
        <>
          <MenuItem title={title} link={link} />
          <DropdownIcon />
          <SlideDownAnimation>
              {children}
          </SlideDownAnimation>
        </>
      )}
    </Popover>
  )
}

export default DropdownMenuItem
