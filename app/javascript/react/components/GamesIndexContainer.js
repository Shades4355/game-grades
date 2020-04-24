import React, {useState, useEffect} from 'react'
import GameTile from './GameTile'

const GamesIndexContainer = props => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/api/v1/games.json")
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
      const gamesArr = gameBody
      setGames(gamesArr)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let gameTiles = games.map((game) => {
    return (
      <GameTile
        key={game.id}
        id={game.id}
        name={game.name}
        description={game.description}
        playerNum={game.player_num}
      />
    )
  })

  return(
    <div className='grid-container'>
      <div className='grid-x grid-margin-x grid-padding-y'>
        {gameTiles}
      </div>
    </div>
  )
}

export default GamesIndexContainer
