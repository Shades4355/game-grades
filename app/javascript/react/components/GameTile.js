import React from 'react'
import { Link } from 'react-router-dom'

const GameTile = props => {
  const name = props.name
  const description = props.description
  const playerNum = props.playerNum
  const id = props.id

  return (
    <div className='callout secondary cell small-12 medium-4'>
      <Link to={`/games/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>Number of Players: {playerNum}</p>
    </div>
  )
}

export default GameTile
