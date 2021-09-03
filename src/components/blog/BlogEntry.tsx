import React from "react"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/solid"
interface Props {
  title: string
  author: string
  publishDate: string
  imageUrl: string
  link: string
  summary: string
  category: {
    name: string
    link: string
  }
}

const BlogEntry = ({
  title,
  category,
  author,
  publishDate,
  link,
  summary,
  imageUrl,
}: Props): JSX.Element => {
  return (
    <article className="flex flex-col shadow my-4">
      <Link href={link}>
        <a className="hover:opacity-75">
          <img src={imageUrl} />
        </a>
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link href={category.link}>
          <a className="text-indigo-700 text-sm font-bold uppercase pb-4">
            {category.name}
          </a>
        </Link>
        <Link href={link}>
          <a className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
        </Link>
        <p className="text-sm pb-3">
          By {author}, Published on {publishDate}
        </p>
        <Link href={link}>
          <a className="pb-6">{summary}</a>
        </Link>
        <Link href={link}>
          <a className="text-gray-800 hover:text-black flex items-center">
            Continue reading <ChevronRightIcon className="h-4 w-4" />
          </a>
        </Link>
      </div>
    </article>
  )
}

export default BlogEntry
