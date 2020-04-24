import React, { useState } from "react"
import { Redirect } from 'react-router-dom'

import NewGameForm from "./NewGameForm"

const NewGameContainer = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)

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
    .catch(error => console.error(`Error in fetch: ${error.message}`)) // show validation errors
  }

  if(shouldRedirect) {
    return <Redirect to='/games' />
  }

  return (
    <NewGameForm
      handleFormSubmit={handleFormSubmit}
    />
  )
}

export default NewGameContainer
