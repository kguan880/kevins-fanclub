import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Timer from './Timer'

const App = () => {
  return (
    <Router>
      <h1>Richard Game</h1>
      <Timer/>
      {/* Routes go here */}
      <Route />
      <Route path='/startgame' component={Timer}/>
    </Router>
  )
}

export default App
