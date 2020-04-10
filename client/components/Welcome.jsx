import React from 'react'
import { Link } from 'react-router-dom'
import { easings } from 'react-animation'


class Welcome extends React.Component {

    render() {
        return (
            <>
                <div>
                    <h1 style={{animation: `pop-in ${easings.easeOutExpo} 3000ms forwards`}}>WELCOME!</h1>
                </div>


                <div className="container">
                    <p>So you think you know Richard?</p>
                    <br/>
                    <p>Test the limitations of your love for our favourite web developer in this battle for glory and truth.</p>
                    <br/>
                    <p>You will have 5 seconds to read 10 of the most important facts about our loveable protagonist then move through 10 true or false statements to test your memory and allegiance.</p>
                    <br/>
                    <p>If you are successful in your quest, you will be rewarded with a cup of delicious, steaming, Hot and Spicy Cup Noodles.</p> 
                    <br/>
                    <p>If you were to fail however, you will be given a packet of Uncle Ben's Rice and Tuna to eat
                    in the Dev Academy Kitchen...</p>

                </div>

                <div className="start-btn-container">
                    <Link to="/start">
                        <button className="start-btn">Let's do this!</button>
                    </Link>
                </div>
                
            </>
        )
    }
}

export default Welcome