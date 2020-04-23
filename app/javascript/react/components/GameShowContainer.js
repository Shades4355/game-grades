import React, { useState, useEffect } from 'react'


const GameShowContainer = props => {
  const [game, setGame] = useState({})

  useEffect(() => {
    let gameId = props.match.params.id
    fetch(`/api/v1/games/${gameId}.json`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(gameBody => {
      const gamesArr = gameBody
      setGame(gamesArr)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    <div>
      <h1> {game.name} </h1>
      <div> {game.player_num} </div>
      <div> {game.description} </div>
    </div>
  )
}

export default GameShowContainer
