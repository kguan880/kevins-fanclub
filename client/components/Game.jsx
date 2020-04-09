import React from 'react'
import { Link } from 'react-router-dom'

class Game extends React.Component{
    render() {
        return (
            <>
            <div>
                {/* Character will be Richard later. Placeholder now */}
                <img src="https://www.kindpng.com/picc/m/125-1250612_rick-and-morty-morty-png-transparent-png.png" alt="Placeholder"/>
            </div>

            <div>
                {/* Questions here */}
                <p>Placeholder</p>
            </div>

            <div>
                {/* True/False input buttons */}
                <button>True</button>
                <button>False</button>
            </div>
            </>
        )
    }
}

export default Game