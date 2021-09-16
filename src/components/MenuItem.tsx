import React from "react"
import Link from "next/link"
import { useUIState } from "context/uiState"

interface Props {  
  link: string
  title: string
  mobile?: boolean
  onClick?: () => void
}

const MenuItem = ({ link, title, mobile = false, onClick }: Props): JSX.Element => {
    const cls = mobile
        ? "block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
        : "text-base font-medium text-gray-500 hover:text-gray-900"
    return (
        <Link href={link}>
            <a onClick={onClick} className={cls}>{title}</a>
        </Link>
    )

}

export default MenuItem
