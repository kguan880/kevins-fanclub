import React, { useDebugValue } from 'react'
import {Link} from 'react-router-dom'

class Timer extends React.Component {
    
    state = {
        count: 5
      }

    render() {
        return (
            <>
                <div className="timer-container">
                    {this.state.count > 0 &&
                        <div className="column">
                            <h2>Facts</h2>
                            <ul>
                                <li>Super Kawaii</li>
                                <li>Basketball God</li>
                                <li>Hype Beast</li>
                                <li>Korean Oppa</li>
                                <li>Ramen is staple food for this god</li>
                            </ul>
                        </div>
                    }


                    {this.state.count > 0 &&
                        <div className="timer">
                            <h1>{this.state.count} </h1>
                        </div>
                    }

                    {this.state.count > 0 &&
                        <div className="column">
                            <h2>Facts pt 2</h2>
                            <ul>
                                <li>IQ over 9000</li>
                                <li>Has a Nintendo Switch and paid off his debt in Animal Crossing, greatest husbando??</li>
                                <li>Smile brighter than our futures</li>
                                <li>Did i mention korean oppa?</li>
                                <li>Read all other facts again</li>
                            </ul>
                        </div>
                    }
                    
                    {this.state.count < 1 &&
                        <div className="start-btn-container">
                            <Link to="/game">
                                <button className="start-btn">Start</button>
                            </Link>
                        </div>
                    }
               </div>
            </>
        )
    }

    componentDidMount() {
        const interval = setInterval(() => {
                    this.setState({
                        count: this.state.count - 1
                    })
                }, 1000)
    }

    componentWillUnmount() {
                    clearInterval(this.interval)
                }

}

export default Timer