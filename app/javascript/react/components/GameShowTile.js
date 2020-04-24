import React from 'react'


const GameShowTile = props => {
  const name = props.name
  const playerNum = props.playerNum
  const description = props.description

  return (
    <div className='grid-x grid-margin-x'>
      <h1 className='cell small-12 title text-white'>
        {name}
      </h1>
      <div className='cell small-12 body'>
        Number of Players: {playerNum}
      </div>
      <div className='cell small-12 body'>
        Description: {description}
      </div>
    </div>
  )
}

export default GameShowTile
