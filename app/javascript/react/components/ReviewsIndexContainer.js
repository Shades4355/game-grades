import React, { useState, useEffect} from 'react'


const ReviewsIndexContainer = props => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("/api/v1/reviews.json")
        .then(response => {
          if (response.ok) {
            return response
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
            throw error
          }
        })
        .then(response => response.json())
        .then(reviewBody => {
          const reviewsArr = reviewBody
          setReviews(reviewsArr)
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
      }, [])

      debugger

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

        </div>
    )
}

export default ReviewsIndexContainer