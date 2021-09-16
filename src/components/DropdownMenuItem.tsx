import { PropsWithChildren } from "react"
import { Popover } from "@headlessui/react"
import MenuItem from "./MenuItem"
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
