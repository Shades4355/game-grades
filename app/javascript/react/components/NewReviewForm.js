import React, { useState } from 'react'

import ErrorList from './ErrorList'

const NewReviewForm = props => {
  const game_id = props.game_id
  const [review, setReview] = useState({
    rating: "",
    body: "",
    game_id: game_id
  })
  const [errors, setErrors] = useState({})
  
  const handleChange = event => {
    setReview({
      ...review,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validateForm = () => {
    let newErrors = {}
    let requiredFields = ["rating"]
    requiredFields.forEach((field) => {
      if(review[field].trim() === "") {
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