import React from 'react'

import ReviewTile from './ReviewTile'

const ReviewsIndexContainer = props => {
  const reviews = props.reviews

  let reviewTiles = reviews.map((review) => {
    return (
      <ReviewTile
        key={review.id}
        reviewUser={review.user_id}
        id={review.id}
        rating={review.rating}
        body={review.body}
        currentUser={props.currentUser}
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
