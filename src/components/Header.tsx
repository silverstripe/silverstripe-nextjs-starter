import MainNav from './MainMenu'
import MobileNav from './MobileMenu'
import { Popover } from '@headlessui/react'
import MenuToggle from './MenuToggle'
import Logo from './Logo'
import { useStaticQuery } from '@silverstripe/nextjs-toolkit'
import { Query } from 'ss-schema'
interface Props {

}

const Header = (): JSX.Element => {
    const menu = useStaticQuery<Query["readPages"]>(`
        query {
            readPages(filter: {
                parentID: { eq: 0 },
                showInMenus: { eq: true }
            }) {
                nodes {
                    hashID
                    link
                    menuTitle
                    navChildren {
                        nodes {
                            hashID
                            link
                            menuTitle
                        }
                    }
                }
            }
        }
    `)
    const menuItems = menu?.readPages?.nodes ?? []
    
    return (
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <Logo />
              <MenuToggle />
            <MainNav menuItems={menuItems} />
          </div>
        </div>
        <MobileNav menuItems={menuItems} />
      </Popover>
    )
}

export default Header
