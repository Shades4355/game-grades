import React, { useState } from 'react'
import ErrorList from './ErrorList'


const NewReviewForm = props => {
  const game_id = props.game_id
  
  const [review, setReview] = useState({
    rating: null,
    body: "",
    game_id: game_id,
    user_id: null
  })
  const [errors, setErrors] = useState({})

  const handleFormSubmit = formData => {
    fetch('/api/v1/games', {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formData),
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
    }
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if(shouldRedirect) {
    return <Redirect to='/games' />
  }

  const handleChange = event => {
    setReview({
      ...review,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validateForm = () => {
    let newErrors = {}
    Object.keys(review).forEach((field) => {
      if(review[field].trim() === "") {
        if(field === "player_num"){
          field = "Number of players"
        }
        newErrors = {
          ...newErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(newErrors)
    return _.isEmpty(newErrors)
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(validateForm()){
      props.handleFormSubmit(review)
    }
  }

  return (
  <div>
    <br />
    <h4>Add a Review!</h4>
    <form onSubmit={handleSubmit}>
      <ErrorList
        errors={errors}
      />
    
      <label htmlFor="rating">Rating (0-5):</label>
      <input
        type="text"
        name="rating"
        id="rating"
        onChange={handleChange}
        value={review.rating}
      />

      <label htmlFor="body">Review: (optional)</label>
      <textarea
        name="body"
        id="body"
        onChange={handleChange}
        value={review.body}
      />

      <input className="button" type="submit" />
    </form>
  </div>
  )
}

export default NewReviewForm