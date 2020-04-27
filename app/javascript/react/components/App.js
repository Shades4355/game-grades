import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GamesIndexContainer from './GamesIndexContainer'
import GameShowContainer from './GameShowContainer'


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
