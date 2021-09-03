const reviews = {
    average: 4,
    totalCount: 1624,
    counts: [
      { rating: 5, count: 1019 },
      { rating: 4, count: 162 },
      { rating: 3, count: 97 },
      { rating: 2, count: 199 },
      { rating: 1, count: 147 },
    ],
    featured: [
      {
        id: 1,
        rating: 5,
        content: `
          <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
        `,
        author: 'Emily Selman',
        avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },
      // More reviews...
    ],
  }


  import React from 'react'
import ReviewStars from './ReviewStars'
import { StarIcon } from "@heroicons/react/solid"
import classNames from '../../utils/classNames'
import HTMLElement from '../../../lib/components/HTMLElement'

  interface Props {
  
  }
  
  const Reviews = (props: Props): JSX.Element => {
      return (
        <section aria-labelledby="reviews-heading" className="bg-white my-4">
          <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-4">
              <h2 id="reviews-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                Customer Reviews
              </h2>

              <div className="mt-3 flex items-center">
                <div>
                  <ReviewStars rating={reviews.average} />
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                </div>
                <p className="ml-2 text-sm text-gray-900">Based on {reviews.totalCount} reviews</p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Review data</h3>

                <dl className="space-y-3">
                  {reviews.counts.map((count) => (
                    <div key={count.rating} className="flex items-center text-sm">
                      <dt className="flex-1 flex items-center">
                        <p className="w-3 font-medium text-gray-900">
                          {count.rating}
                          <span className="sr-only"> star reviews</span>
                        </p>
                        <div aria-hidden="true" className="ml-1 flex-1 flex items-center">
                          <StarIcon
                            className={classNames(
                              count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                              'flex-shrink-0 h-5 w-5'
                            )}
                            aria-hidden="true"
                          />

                          <div className="ml-3 relative flex-1">
                            <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                            {count.count > 0 ? (
                              <div
                                className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                                style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                              />
                            ) : null}
                          </div>
                        </div>
                      </dt>
                      <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
                        {Math.round((count.count / reviews.totalCount) * 100)}%
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
                <p className="mt-1 text-sm text-gray-600">
                  If you’ve stayed here recetly, share your thoughts with other travellers
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                >
                  Write a review
                </a>
              </div>
            </div>

            <div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
              <h3 className="sr-only">Recent reviews</h3>

              <div className="flow-root">
                <div className="-my-12 divide-y divide-gray-200">
                  {reviews.featured.map((review) => (
                    <div key={review.id} className="py-12">
                      <div className="flex items-center">
                        <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />
                        <div className="ml-4">
                          <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                          <ReviewStars rating={review.rating} />
                          <p className="sr-only">{review.rating} out of 5 stars</p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-6 text-base italic text-gray-600">
                          <HTMLElement html={review.content} />
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
 
      )
  }
  
  export default Reviews
  