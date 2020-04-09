import React from 'react'

class Timer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 5
        }
    }

    render() {

        return (
            <>
                {this.state.count > 0 &&
                    <div>
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


                <button>Start game</button>

                {this.state.count > 0 &&
                    <h2>Timer: {this.state.count} </h2>
                }

                {this.state.count > 0 &&
                    <div>
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

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
}

export default Timer