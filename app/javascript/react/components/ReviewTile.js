import React, {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'

const ReviewTile = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const rating = props.rating
  const body = props.body
  const reviewUser = props.reviewUser
  const currentUser = props.currentUser

  const deleteReview = (event) => {
      fetch(`/api/v1/reviews/${props.id}`, {
        credentials: "same-origin",
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if(response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(parsedData => {
        if (parsedData.errors){
        setErrors(parsedData.errors)
        } else {
          setShouldRedirect(true)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  if (shouldRedirect) {
    return <Redirect to='/games' />
  }

  let editDelete

  if (currentUser.id === reviewUser) {
    editDelete = <div>
      <div className='button success'>
        <Link to={`/reviews/${props.id}/edit`}>Edit</Link>
      </div>
      < div className='button success' onClick={deleteReview}>
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
