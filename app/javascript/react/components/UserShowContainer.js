import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const UserShowContainer = props => {
  const [user, setUser] = useState({
    email: "",
    profile_photo: {url: ""},
    games: []
  })

  useEffect(() => {
    let userId = props.match.params.id
    fetch('/api/v1/users/' + userId)
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(parsedData => setUser(parsedData))
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let gameLibrary = user.games.map((game) => {
    return (
      <li key={game.id}>
        <Link to={`/games/${game.id}`}>{game.name}</Link>
      </li>
    )
  })
debugger
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x grid-padding-y">
        <div className="cell small-3">
          <img className="user-show-profile-photo" src={user.profile_photo.url} />
        </div>
        <div className="cell auto">
          <h2>{user.email}</h2>
        </div>
        <div className="cell small-12">
          <h2>Games Owned</h2>
          <ul>
            {gameLibrary}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserShowContainer
