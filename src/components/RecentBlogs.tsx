import React from 'react'

interface Props {

}
const posts = [
    {
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
    },
    {
      title: 'How to use search engine optimization to drive sales',
      href: '#',
      description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
    },
    {
      title: 'Improve your customer experience',
      href: '#',
      description:
        'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
    },
    {
      title: 'Writing effective landing page copy',
      href: '#',
      description:
        'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
      date: 'Jan 29, 2020',
      datetime: '2020-01-29',
    },
  ]
const RecentBlogs = (props: Props): JSX.Element => {
    return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
              </a>
              <div className="mt-3">
                <a href={post.href} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> 
    )
}

export default RecentBlogs
