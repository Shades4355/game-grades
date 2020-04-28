import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GamesIndexContainer from './GamesIndexContainer'
import NewGameContainer from './NewGameContainer'
import GameShowContainer from './GameShowContainer'
import UserShowContainer from './UserShowContainer'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/games' component={GamesIndexContainer}/>
        <Route exact path='/games/new' component={NewGameContainer}/>
        <Route exact path='/' component={GamesIndexContainer}/>
        <Route exact path='/games/:id' component={GameShowContainer}/>
        <Route exact path='/users/:id' component={UserShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
