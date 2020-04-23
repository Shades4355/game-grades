import React from 'react'
import GamesIndexContainer from './GamesIndexContainer'
import NewGameContainer from './NewGameContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/games' component={GamesIndexContainer}/>
        <Route exact path='/games/new' component={NewGameContainer}/>
      </Switch>
    </BrowserRouter>

  )
}

export default App
