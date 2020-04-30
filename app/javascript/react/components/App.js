import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import GamesIndexContainer from './GamesIndexContainer'
import NewGameContainer from './NewGameContainer'
import GameShowContainer from './GameShowContainer'
import ReviewEditForm from './ReviewEditForm'
import UserShowContainer from './UserShowContainer'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={GamesIndexContainer} />
        <Route exact path='/games' component={GamesIndexContainer} />
        <Route exact path='/games/new' component={NewGameContainer} />
        <Route exact path='/games/:id' component={GameShowContainer} />
        <Route exact path='/users/:id' component={UserShowContainer} />
        <Route exact path='/reviews/:id/edit' component={ReviewEditForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
