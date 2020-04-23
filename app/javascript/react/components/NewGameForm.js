import React, { useState } from "react"

const NewGameForm = props => {

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

  const handleSubmit = event => {
    event.preventDefault();
    props.handleFormSubmit(formVals)
  }

  return (
    <div>
      <h2>Add a game to our library!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Game Name:</label>
        <input 
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formVals.name}
          />

        <label htmlFor="description">Game Description:</label>
        <textarea 
          name="description"
          id="description"
          onChange={handleChange}
          value={formVals.description}
          />

        <label htmlFor="player_num">Number of Players:</label>
        <input
          type="text"
          name="player_num"
          id="player_num"
          onChange={handleChange}/>

        <input type="submit" />
      </form>
    </div>
  )
}

export default NewGameForm