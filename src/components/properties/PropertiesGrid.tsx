import React from "react"
import Link from "next/link"

interface Props {}

const data = [
  {
    title: 'Stunning views',
    price: 250,
    region: { href: '#', name: 'Mordor' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: '16 Sept 2021',
    datetime: '2021-09-16',
    imageUrl:
      'https://images.unsplash.com/photo-1588192893889-6881e3db324f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    title: 'Cozy cottage by the sea',
    price: 175,
    region: { href: '#', name: 'Beleriand' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: '22 Oct 2021',
    datetime: '2021-10-22',
    imageUrl:
      'https://images.unsplash.com/photo-1586893133130-a763a570686e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ul9GeW4tR3d0bHd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    title: 'City living',
    price: 295,
    region: { href: '#', name: 'Hildorien' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: '29 October 2021',
    datetime: '2021-10-29',
    imageUrl:
      'https://images.unsplash.com/photo-1629794225613-ee03311ad8aa?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    bedrooms: 2,
    bathrooms: 1,
  },

]

const properties = [...data, ...data, ...data, ...data]

const PropertiesGrid = (props: Props): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {properties.map((property, i) => (
        <Link key={i} href={`/property-detail`}>
          <a className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h4 className="mt-2 text-xs text-gray-700">{property.region.name}</h4>
            <h3 className="mt-2 text-md text-gray-700">{property.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              ${property.price} per night
            </p>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default PropertiesGrid
