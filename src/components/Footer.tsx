import React from 'react'
import { HomeIcon } from '@heroicons/react/solid'
import SocialIcon from '../components/SocialIcon'

interface Props {

}
const footer = {
    company: [
      { name: "Our Properties", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "About Us", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms and Conditions", href: "#" },
    ],
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: "facebook",
      },
      {
        name: "Instagram",
        href: "#",
        icon: "instagram",
      },
      {
        name: "Twitter",
        href: "#",
        icon: "twitter",
      },
    ],
  }
  
  
const Footer = (props: Props): JSX.Element => {
    return (
      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <HomeIcon className="h-10" />
              <p className="text-gray-500 text-base">
                Making the world a better place, one sequel at a time.
              </p>
              <div className="flex space-x-6">
                {footer.social.map(item => (
                    <SocialIcon
                        key={item.name}
                        link={item.href}
                        icon={item.icon as "facebook" | "twitter" | "instagram"}
                        iconProps={{
                            className: "h-6 w-6"
                        }}
                        name={item.name}
                     />
                ))}
              </div>
            </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footer.company.map(item => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footer.legal.map(item => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2021 One Ring Rentals, Inc. All rights reserved.
            </p>
          </div>
      </footer>
 
    )
}

export default Footer
