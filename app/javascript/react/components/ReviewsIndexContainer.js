import React, { useState, useEffect} from 'react'
import ReviewTile from './ReviewTile'

const ReviewsIndexContainer = props => {
  const reviews = props.reviews

    let reviewTiles = reviews.map((review) => {
      return (
        <ReviewTile
          key={review.id}
          id={review.id}
          rating={review.rating}
          body={review.body}
          
        />
      )
    })

   return(
      <div>
        {reviewTiles}
      </div>
  )
}

export default ReviewsIndexContainer