import React, { useState } from 'react'

import NewReviewForm from './NewReviewForm'

const NewReviewContainer = props => {
  const game_id = props.game_id
  const getGamePageInfo = props.getGamePageInfo

  const handleFormSubmit = formData => {
    fetch(`/api/v1/games/${game_id}/reviews`, {
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
      } else {
        getGamePageInfo()
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
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
