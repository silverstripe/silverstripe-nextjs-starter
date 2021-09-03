import React from 'react'
import Link from 'next/link'

interface Props {

}

const BlogSidebar = (props: Props): JSX.Element => {
    return (
            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <h3 className="py-2 px-4 mb-2 leading-6 text-white bg-indigo-600 font-semibold tracking-wide uppercase">Filter by date</h3>
              <ul className="pb-2">
                  <Link href="/blog"><a><li className="text-indigo-500 mb-1">August 2021</li></a></Link>
                  <Link href="/blog"><a><li className="text-indigo-500 mb-1">July 2021</li></a></Link>
                  <Link href="/blog"><a><li className="text-indigo-500 mb-1">June 2021</li></a></Link>
                  <Link href="/blog"><a><li className="text-indigo-500 mb-1">March 2021</li></a></Link>
                  <Link href="/blog"><a><li className="text-indigo-500 mb-1">February 2021</li></a></Link>
                  <Link href="/blog"><a><li className="text-indigo-500 mb-1">December 2020</li></a></Link>
                  <Link href="/blog"><a><li className="text-indigo-500 mb-1">November 2020</li></a></Link>
              </ul>
              <h3 className="py-2 px-4 mb-2 mt-4 leading-6 text-white bg-indigo-600 font-semibold tracking-wide uppercase">Filter by category</h3>
              <ul className="pb-2">
                  <Link href="/blog"><a><li className="text-indigo-500 mb-1">Holidays</li></a></Link>
                  <Link href="/blog"><a><li className="text-indigo-500 mb-1">Travel</li></a></Link>
                  <Link href="/blog"><a><li className="text-indigo-500 mb-1">Deals</li></a></Link>
                  <Link href="/blog"><a><li className="text-indigo-500 mb-1">Getaways</li></a></Link>
              </ul>
            </div>
    )
}

export default BlogSidebar
