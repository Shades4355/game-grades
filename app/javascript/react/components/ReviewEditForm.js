import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'

import ErrorList from './ErrorList'

const ReviewEditForm = props => {
  const [review, setReview] = useState({})
  const [errors, setErrors] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    fetch(`/api/v1/reviews/${props.match.params.id}/edit`)
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
    }
      setReview(parsedData)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const handleChange = event => {
    setReview({
      ...review,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch(`/api/v1/reviews/${props.match.params.id}`, {
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(review),
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
    return <Redirect to={`/games/${review.game.id}`} />
  }
  return (
    <div className="grid-container">
      <div className='grid-x grid-margin-x align-center'>
        <div className="cell small-12 medium-10">
          <h4>Edit your Review!</h4>
          <form onSubmit={handleSubmit}>
            <ErrorList
              errors={errors}
            />

            <label htmlFor="rating" className="text-white">Rating (0-5):</label>
            <input
              type="text"
              name="rating"
              id="rating"
              onChange={handleChange}
              value={review.rating}
            />

            <label htmlFor="body" className="text-white">Review (optional):</label>
            <textarea
              name="body"
              id="body"
              onChange={handleChange}
              value={review.body}
            />

            <input className="button" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReviewEditForm
