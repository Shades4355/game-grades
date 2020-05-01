import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import GameShowTile from './GameShowTile'
import NewReviewContainer from './NewReviewContainer'

const GameShowContainer = props => {
  const [game, setGame] = useState({
    key: 0,
    id: null,
    name: "",
    description: "",
    playerNum: "",
    reviews: [],
    current_user: {},
    photo: ""
  })

  let getGamePageInfo = () => {
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
  }
  useEffect(() => {
    getGamePageInfo()}, [])

    let showReviewContainer
    if (game.current_user) {
      showReviewContainer =
      <NewReviewContainer
        game_id={game.id}
        getGamePageInfo={getGamePageInfo}
      />
    } else {
      showReviewContainer = (
        <div>
          <h3 className='title'>Please <a href="/users/sign_in">Log In</a> to Leave a Comment</h3>
        </div>
      )
    }

  if (game.id === null) {
    return(
      <h1>
        Loading...
      </h1>
    )
  } else {
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
              currentUser={game.current_user}
              photo={game.photo}
              getGamePageInfo={getGamePageInfo}
            />
            {showReviewContainer}
          </div>
        </div>
      </div>
    )
  }
}

export default GameShowContainer
