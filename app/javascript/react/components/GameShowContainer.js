import React, { useState, useEffect } from 'react'

import GameShowTile from './GameShowTile'
import NewReviewContainer from './NewReviewContainer'

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
      setGame(gameBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    <div className="grid-container">
      <div className='grid-x grid-margin-x'>
        <div className="cell small-12 medium-10 align-center">
          <GameShowTile
            key={game.id}
            id={game.id}
            name={game.name}
            description={game.description}
            playerNum={game.player_num}
            reviews={game.reviews}
          />
          <NewReviewContainer
            game_id={game.id}
          />
        </div>
      </div>
    </div>
  )
}

export default GameShowContainer
