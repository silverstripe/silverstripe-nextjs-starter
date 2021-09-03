import MainNav from './MainNav'
import MobileNav from './MobileNav'
import { Popover } from '@headlessui/react'
import MenuToggle from './MenuToggle'
import Logo from './Logo'
interface Props {

}

const Header = (props: Props): JSX.Element => {
    return (
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <Logo />
              <MenuToggle />
            <MainNav />
          </div>
        </div>
        <MobileNav />
      </Popover>
    )
}

export default Header
