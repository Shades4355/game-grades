import React, { useState } from "react"
import _ from 'lodash'

import ErrorList from "./ErrorList"

const NewGameForm = props => {
  const [errors, setErrors] = useState({})

  const [formVals, setFormVals] = useState({
    name: "",
    description: "",
    player_num: ""
  })

  const handleChange = event => {
    setFormVals({
      ...formVals,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validateForm = () => {
    let newErrors = {}
    Object.keys(formVals).forEach((field) => {
      if(formVals[field].trim() === "") {
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
      props.handleFormSubmit(formVals)
    }
  }

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x align-center">
        <div className="cell small-12 medium-10">
          <h2 className="text-white">Add a game to our library!</h2>
          <form onSubmit={handleSubmit}>
            <ErrorList
              errors={errors}
              />

            <label htmlFor="name" className="text-white">Game Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={formVals.name}
              />

            <label htmlFor="description" className="text-white">Game Description:</label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              value={formVals.description}
              />

            <label htmlFor="player_num" className="text-white">Number of Players:</label>
            <input
              type="text"
              name="player_num"
              id="player_num"
              onChange={handleChange}
              />

            <input className="button" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewGameForm
