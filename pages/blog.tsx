import React from "react"
import BlogEntry from "../src/components/blog/BlogEntry"
import PageLayout from "../src/layouts/PageLayout"
import Link from 'next/link'
import BlogSidebar from "../src/components/blog/BlogSidebar"

const blogs = [
    {
        title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
        author: "Uncle Cheese",
        publishDate: "28 August 2021",
        imageUrl: "https://source.unsplash.com/collection/1346951/1000x500",
        link: "/blog-entry",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna",
        category: {
          name: "Holidays",
          link: "/blog",
        }
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
        author: "Uncle Cheese",
        publishDate: "13 July 2021",
        imageUrl: "https://source.unsplash.com/collection/1346951/1000x500",
        link: "/blog-entry",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna",
        category: {
          name: "Interior design",
          link: "/blog",
        }
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
        author: "Uncle Cheese",
        publishDate: "13 June 2021",
        imageUrl: "https://source.unsplash.com/collection/1346951/1000x500",
        link: "/blog-entry",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna",
        category: {
          name: "Trends",
          link: "/blog",
        }
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
        author: "Uncle Cheese",
        publishDate: "24 March 2021",
        imageUrl: "https://source.unsplash.com/collection/1346951/1000x500",
        link: "/blog-entry",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna",
        category: {
          name: "Holidays",
          link: "/blog",
        }
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
        author: "Uncle Cheese",
        publishDate: "3 March 2021",
        imageUrl: "https://source.unsplash.com/collection/1346951/1000x500",
        link: "/blog-entry",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna",
        category: {
          name: "Getaways",
          link: "/blog",
        }
    },
    {
        title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
        author: "Uncle Cheese",
        publishDate: "22 January 2021",
        imageUrl: "https://source.unsplash.com/collection/1346951/1000x500",
        link: "/blog-entry",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna",
        category: {
          name: "Deals",
          link: "/blog",
        }
    },

]
const Blog = () => {
  return (
    <PageLayout>
      <main className="flex-grow mx-auto max-w-7xl w-full flex px-4 sm:px-6 lg:px-8">
        
          <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            {blogs.map((blog => (
                <BlogEntry key={blog.title} {...blog} />
            )))}
            </section>

          <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
            <BlogSidebar />
          </aside>
      </main>
    </PageLayout>
  )
}

export default Blog
