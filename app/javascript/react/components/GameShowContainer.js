import React, { useState, useEffect } from 'react'
import GameShowTile from './GameShowTile'
import NewReviewForm from './NewReviewForm'


const GameShowContainer = props => {
  const [game, setGame] = useState({
    key: 0,
    id: 0,
    name: "",
    description: "",
    playerNum: "",
    reviews: []
  })

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
      <GameShowTile
        key={game.id}
        id={game.id}
        name={game.name}
        description={game.description}
        playerNum={game.player_num}
        reviews={game.reviews}
      />

      <NewReviewForm
        game_id={game.id}
      />
    </div>
  )
}

export default GameShowContainer
