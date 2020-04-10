import React from 'react'
import { Link } from 'react-router-dom'

class Lose extends React.Component {

  render() {
      return (
          <>
                <div>
                    <h1>Damn..</h1>
                    <h2>You got less than 5 points</h2>
                </div>

                <div className="image">
                <HideUntilLoaded
                        animationIn="bounceIn"
                        imageToLoad="../images/r-eyes-closed.png"
                        Spinner={() => <div>Loading...</div>}
                    >
                        <img src="../images/r-eyes-closed.png" alt="sad richard"/>
                    </HideUntilLoaded>
                </div>

                <div>
                    <p>
                       You gave it you're all, and that's great.. But looks like you're eating tuna and rice again..
                    </p>
                    
                </div>
            <Link to="/game">
                <button>Restart</button>
            </Link>
          </>
      )
  }
}

export default Lose