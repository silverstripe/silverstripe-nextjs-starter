import React from "react"
import { StarIcon } from "@heroicons/react/solid"
import classNames from "../../utils/classNames"

interface Props {
  rating: number
}

const ReviewStars = ({ rating }: Props): JSX.Element => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map(n => (
          <StarIcon
            key={n}
            className={classNames(
              rating > n ? "text-indigo-500" : "text-gray-300",
              "h-5 w-5 flex-shrink-0"
            )}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="sr-only">{rating} out of 5 stars</p>
    </div>
  )
}

export default ReviewStars
