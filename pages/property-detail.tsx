import ReviewStars from "../src/components/property-detail/ReviewStars"

const property = {
  name: "Beautiful Sea Views",
  price: 140,
  rating: 4,
  images: [
    {
      id: 1,
      name: "Outdoor view",
      src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      alt: "Beautiful sea views.",
    },
  ],
  description: `
    <p>What a property. You have to see it to believe it</p>
  `,
  details: [
    {
      name: "Features",
      content: "<ul><li>Multiple strap configurations</li><li>Spacious interior with top zip</li><li>Leather handle and tabs</li><li>Interior dividers</li><li>Stainless strap loops</li><li>Double stitched construction</li><li>Water-resistant</li></ul>"
    },
    {
      name: "Cancellation policy",
      content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum auctor nunc. Donec eu ornare purus. Aliquam tortor enim, iaculis quis pellentesque at, feugiat et diam. Nam suscipit odio a porta hendrerit. Integer quis quam feugiat, commodo turpis vitae, suscipit sapien.</p>"
    },

  ],
}
const relatedProperties = [
  {
    id: 1,
    name: "Downtown living",
    color: "White and black",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1619874536663-f8470d6d79b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    imageAlt: "Close to everything the city has to offer. You will love it.",
    price: 220,
  },
]
import classNames from "../src/utils/classNames"

import React from "react"
import ImageGallery from "../src/components/property-detail/ImageGallery"
import HTMLElement from "../lib/components/HTMLElement"
import PageLayout from "../src/layouts/PageLayout"
import BookingForm from "../src/components/property-detail/BookingForm"
import Details from "../src/components/property-detail/Details"
import PropertySummary from "../src/components/property-detail/PropertySummary"
import Reviews from "../src/components/property-detail/Reviews"

interface Props {}

const PropertyDetail = (props: Props): JSX.Element => {
  return (
    <PageLayout>
      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <ImageGallery images={property.images} />

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {property.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">
                  ${property.price} per night
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <ReviewStars rating={property.rating} />
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div className="text-base text-gray-700 space-y-6">
                  <HTMLElement html={property.description} />
                </div>

                <BookingForm />
                <Details details={property.details} />
      
              </div>
            </div>
          </div>
        </div>
        <Reviews />
      </main>
    </PageLayout>
  )
}

export default PropertyDetail
