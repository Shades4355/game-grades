import React, { useState } from 'react'

import ReviewsIndexContainer from './ReviewsIndexContainer'

const GameShowTile = props => {
  const {name, playerNum, description, reviews, photo, currentUser} = props
  const [gameAdded, setGameAdded] = useState(false)

  const addGame = () => {
    let gameId = props.id
    fetch(`/api/v1/games/${gameId}/owned_games`, {
      credentials: "same-origin",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        setGameAdded(true)
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  let gameAddedStatus
  if(gameAdded) {
    gameAddedStatus = <p className="text-white">Game added to your library!</p>
  } else {
    gameAddedStatus = ""
  }

  let loggedInStatus
  if(currentUser){
    loggedInStatus = <div>
      <div className='button' onClick={addGame}>
        Add game to Library
      </div>
      {gameAddedStatus}
    </div>
  } else {
    loggedInStatus = ""
  }

  return (
    <div>
      <h1 className='cell small-12 title text-white'>
        {name}
      </h1>
      <div>
        <img
          src={photo}
          alt="image"
        />
      </div>
      <br />
      {loggedInStatus}
      <div className='cell small-12 body'>
        <p><strong>Number of Players:</strong> {playerNum}</p>
      </div>
      <div className='cell small-12 body'>
        <p><strong>Description:</strong> {description}</p>
      </div>
      <div className='cell small-12'>
        <strong>Reviews:</strong>
        <ReviewsIndexContainer
          reviews={reviews}
          currentUser={props.currentUser}
          getGamePageInfo={props.getGamePageInfo}
        />
      </div>
    </div>
  )
}

export default GameShowTile
