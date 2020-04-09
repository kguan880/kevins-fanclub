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

                <button>Start game</button>
                <h2>Ready? {this.state.count} </h2>

                <div>
                    <h2>Facts pt 2</h2>
                    <ul>
                        <li>IQ over 9000</li>
                        <li>Has a Nintendo Switch and paid off his debt in Animal Crossing, husband material much??</li>
                        <li>Smile brighter than our futures</li>
                        <li>Did i mention korean oppa?</li>
                        <li>Read all other facts again</li>
                    </ul>
                </div>

            </>
        )
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }

}

export default Timer