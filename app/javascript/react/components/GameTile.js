import React from 'react'

const GameTile = props => {
  const name = props.name
  const description = props.description
  const playerNum = props.playerNum
  return (
    <div>
      <h2>{name}</h2>
      <p>Number of Players: {playerNum}</p>
      <p>{description}</p>
    </div>
  )
}

export default GameTile
