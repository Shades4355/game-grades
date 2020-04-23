import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const GameTile = props => {
  const name = props.name
  const description = props.description
  const playerNum = props.playerNum
  const id = props.id

  return (
    <div className='callout secondary cell small-12 medium-4'>
      <BrowserRouter>
        <Link to={`/games/${id}`}>
          <h3>{name}</h3>
        </Link>
      </BrowserRouter>
      <p>Number of Players: {playerNum}</p>
    </div>
  )
}

export default GameTile
