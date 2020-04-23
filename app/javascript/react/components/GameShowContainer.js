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
    <div className='grid-x grid-margin-x'>
      <h1 className='cell small-12'>
        {game.name}
      </h1>
      <div className='cell small-12'>
        Number of Players: {game.player_num}
      </div>
      <div className='cell small-12'>
        Description: {game.description}
      </div>
    </div>
  )
}

export default GameShowContainer
