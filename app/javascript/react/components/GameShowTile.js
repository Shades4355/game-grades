import React from 'react'
import ReviewsIndexContainer from './ReviewsIndexContainer'


const GameShowTile = props => {
  const {name, playerNum, description, reviews} = props
debugger
  const addGame = () => {
    let gameId = props.id
    fetch(`api/v1/games/${gameId}/owned_games`, {
      method: "POST"
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  return (
    <div className='grid-x grid-margin-x'>
      <h1 className='cell small-12 title text-white'>
        {name}
      </h1>
      <div className='button' onClick={addGame}>
      Add game to Library
      </div>
      <div className='cell small-12 body'>
        Number of Players: {playerNum}
      </div>
      <div className='cell small-12 body'>
        Description: {description}
      </div>
      <div className='cell small-12'>
        Reviews:
        <ReviewsIndexContainer
          reviews={reviews}
        />
      </div>
    </div>
  )
}

export default GameShowTile
