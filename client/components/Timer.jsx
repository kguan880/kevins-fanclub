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
            <h2>Ready? {this.state.count} </h2>
            </>
        )
    }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count -1 
      })
    }, 1000)
  }
}

export default Timer