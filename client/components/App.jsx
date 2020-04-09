import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Game from './Game'

const App = () => {
  return (
    <Router>
      {/* Routes go here */}
      <Route path="/game" component={Game}/>
    </Router>
  )
}

export default App
