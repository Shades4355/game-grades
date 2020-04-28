import React from 'react'


const ReviewTile = props => {
  const rating = props.rating
  const body = props.body

  return(
    <ul>
      <li>
        {rating} Stars<br />
        Review: {body}
      </li>
    </ul>
  )
}

export default ReviewTile
