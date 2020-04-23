import React from 'react'
import GamesIndexContainer from './GamesIndexContainer'
import GameShowContainer from './GameShowContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/games' component={GamesIndexContainer}/>
        <Route exact path='/' component={GamesIndexContainer}/>
        <Route path='/games/:id' component={GameShowContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
