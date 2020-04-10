import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Welcome from './Welcome'
import Win from './Win'
import Lose from './Lose'
import Game from './Game'
import Timer from './Timer'

class App extends React.Component {
  

  // timerFunction = () =>{
  //   console.log("hello")
  // }

//   componentDidMount() {
//       const interval = setInterval(() => {
//           this.setState({
//               count: this.state.count - 1
//           })
//       }, 1000)
//   }

  render() {
    return (
      <Router>
        <h1>Richard Game</h1>
        {/* Routes go here */}
        <Route exact path="/" component={Welcome} />
        <Route path='/start' component={Timer}/>
        <Route path="/game" component={Game} />
        <Route path="/win" component={Win} />
        <Route path="/lose" component={Lose} />
      </Router>
    )
  }
}

export default App
