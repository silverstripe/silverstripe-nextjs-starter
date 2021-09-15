import React from "react"
import { GlobeIcon } from "@heroicons/react/solid"
import Link from "next/link"

const Logo = (): JSX.Element => {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <Link href={`/`}>
          <a>
        <span className="sr-only">Silverstripe CMS + NextJS</span>
        <div className="flex items-center">
          <GlobeIcon className="h-8 w-auto sm:h-10 text-gray-400" />
          <span className="mx-2 font-bold">
            Your Silverstripe CMS + NextJS website
          </span>
        </div>
        </a>
      </Link>
    </div>
  )
}

export default Logo
