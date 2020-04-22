import React, {useState, useEffect} from 'react'

const GamesIndexContainer = props => {
  const [games, setGames] = useState()

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
      setGames(gameBody)
      debugger
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  // let gameTiles = games.map((game) => {
  //   return (
  //     <GameTile
  //       key={game.key}
  //       name={game.name}
  //       description={game.description}
  //       playerNum={game.player_num}
  //     />
  //   )
  // })

  return(
    <div>
      hello
    </div>
  )
}

export default GamesIndexContainer
