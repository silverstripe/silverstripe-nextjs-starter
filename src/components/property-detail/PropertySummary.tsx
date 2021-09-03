import React from 'react'

interface Props {
    property: any
}

const PropertySummary = ({ property }: Props): JSX.Element => {
    return (
                <div key={property.id}>
                  <div className="relative">
                    <div className="relative w-full h-72 rounded-lg overflow-hidden">
                      <img
                        src={property.imageSrc}
                        alt={property.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="relative mt-4">
                      <h3 className="text-sm font-medium text-gray-900">{property.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{property.color}</p>
                    </div>
                    <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">{property.price}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href={property.href}
                      className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      Book now<span className="sr-only">, {property.name}</span>
                    </a>
                  </div>
                </div>
 
    )
}

export default PropertySummary
