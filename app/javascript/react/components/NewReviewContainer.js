import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import NewReviewForm from './NewReviewForm'

const NewReviewContainer = props => {
  const game_id = props.game_id
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleFormSubmit = formData => {
    formData.game_id = game_id
    fetch('/api/v1/reviews', {
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
    return <Redirect to={'/games/' + game_id} />
  }

  return(
    <div>
      <NewReviewForm 
        handleFormSubmit={handleFormSubmit}
        game_id={game_id}
      />
    </div>
  )
}

export default NewReviewContainer