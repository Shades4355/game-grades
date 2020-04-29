import React from 'react'

const ReviewTile = props => {
  const rating = props.rating
  const body = props.body
  
  let editDelete 
  
  if (true) { editDelete = <div>
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
        {body}
        {editDelete}
      </li>
    </ul>
  )
}

export default ReviewTile
