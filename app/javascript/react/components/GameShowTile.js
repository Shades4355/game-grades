import React from 'react'

import ReviewsIndexContainer from './ReviewsIndexContainer'

const GameShowTile = props => {
  const {name, playerNum, description, reviews} = props

  return (
    <div>
      <h1 className='cell small-12 title text-white'>
        {name}
      </h1>
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
          currentUser={props.currentUser}
        />
      </div>
    </div>
  )
}

export default GameShowTile
