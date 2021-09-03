import React from "react"
import { HomeIcon } from '@heroicons/react/solid'

interface Props {}

const Logo = (props: Props): JSX.Element => {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <a href="#">
        <span className="sr-only">Workflow</span>
        <div className="flex items-center">
        <HomeIcon className="h-8 w-auto sm:h-10 text-yellow-400" />
        <span className="mx-2 font-bold">One Ring Rentals</span>
        </div>
      </a>
    </div>
  )
}

export default Logo
