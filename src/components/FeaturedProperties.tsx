import React from 'react'
import { CalendarIcon } from '@heroicons/react/solid'

interface Props {

}

const properties = [
    {
      title: 'Stunning views',
      href: '#',
      region: { href: '#', name: 'Mordor' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: '16 Sept 2021',
      datetime: '2021-09-16',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      title: 'Cozy cottage by the sea',
      href: '#',
      region: { href: '#', name: 'Beleriand' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: '22 Oct 2021',
      datetime: '2021-10-22',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      title: 'City living',
      href: '#',
      region: { href: '#', name: 'Hildorien' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: '29 October 2021',
      datetime: '2021-10-29',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      bedrooms: 2,
      bathrooms: 1,
    },

  ]
const FeaturedProperties = (props: Props): JSX.Element => {
    return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Featured properties</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {properties.map((property) => (
            <div key={property.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={property.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-purple-600">
                    <a href={property.region.href} className="hover:underline">
                      {property.region.name}
                    </a>
                  </p>
                  <a href={property.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{property.title}</p>
                    <p className="mt-3 text-base text-gray-500">{property.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div>
                    <div className="flex space-y-2 justify-between flex-col text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="h-6 w-6" aria-hidden="true" /> <span className="font-bold">Available</span>: <time dateTime={property.datetime}>{property.date}</time>
                      </div>
                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
                        {property.bedrooms}
                        </span> bedrooms
                      </div>
                      <div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
                        {property.bathrooms}
                        </span> bathrooms
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> 
    )
}

export default FeaturedProperties
