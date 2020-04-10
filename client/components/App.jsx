import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Welcome from './Welcome'
import Win from './Win'
import Lose from './Lose'
import Game from './Game'
import Timer from './Timer'

const App = () => {
  return (
    <Router>
      <h1>Richard Game</h1>
      {/* Routes go here */}
      <Route exact path="/" component={Welcome} />
      <Route path="/game" component={Game}/>
      <Route path='/start' component={Timer}/>
      <Route path="/win" component={Win} />
      <Route path="/lose" component={Lose} />
    </Router>
  )
}

export default App
