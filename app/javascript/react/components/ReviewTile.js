import React from 'react'

const ReviewTile = props => {
  const rating = props.rating
  const body = props.body
  const reviewUser = props.reviewUser
  const currentUser = props.currentUser

  let editDelete

  if (currentUser.id === reviewUser) {
    editDelete = <div>
      <div className='button success'>
        Edit
      </div>
      < div className='button success'>
        Delete
      </div>
    </div>
  } else {
    editDelete = ''
  }

  return(
    <ul>
      <li>
        {rating} Stars<br />
        {reviewUser} <br />
        {body}
        {editDelete}
      </li>
    </ul>
  )
}

export default ReviewTile
