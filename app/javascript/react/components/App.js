import React from 'react'
import GamesIndexContainer from './GamesIndexContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/games' component={GamesIndexContainer}/>
      </Switch>
    </BrowserRouter>

  )
}

export default App
