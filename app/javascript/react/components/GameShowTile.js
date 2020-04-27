import React from 'react'
import ReviewsIndexContainer from './ReviewsIndexContainer'


const GameShowTile = props => {
  const name = props.name
  const playerNum = props.playerNum
  const description = props.description
  const reviews = props.reviews

  return (
    <div className='grid-x grid-margin-x'>
      <h1 className='cell small-12'>
        {name}
      </h1>
      <div className='cell small-12'>
        Number of Players: {playerNum}
      </div>
      <div className='cell small-12'>
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
