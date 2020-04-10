import React from 'react'
import { Link } from 'react-router-dom'

class Win extends React.Component {

    render() {
        return (
            <>
                <div>
                    <h1>YAAASSSSS!</h1>
                    <h2>You got more than 5 points!</h2>
                </div>

                <div className="image">
                    <img src="../images/r-winking.gif" alt="Richard Happy"/>
                </div>

                <div>
                    <p>
                        Now indulge your palette with flavours of Cup Noodles, as Hot and Spicy as the good Richard himself!
                    </p>

                </div>

                <Link to="/game">
                    <button>Restart</button>
                </Link>
            </>
        )
    }
}

export default Win