import React from 'react'
import { Link } from 'react-router-dom'

class Game extends React.Component{
    state = {
        questionCount: 0,
        correctCount: 0,
        incorrectCount: 0,
        questions: [
            {
                fact: "Ramen is staple food for this god",
                isTrue: true,
                isFalse: false,
            },
            {
                fact: "Super Kawaii",
                isTrue: false,
                isFalse: true,
            },
            {
                fact: "Basketball God",
                isTrue: false,
                isFalse: true,
            },
            {
                fact: "Paid off his debt in Animal Crossing, greatest husbando??",
                isTrue: true,
                isFalse: false,
            },
            {
                fact: "IQ over 9000",
                isTrue: false,
                isFalse: true,
            },
            {
                fact: "Smile Brighter than our Futures",
                isTrue: true,
                isFalse: false,
            },
            {
                fact: "Hype Beast",
                isTrue: true,
                isFalse: false,
            },
            {
                fact: "Korean Oppa",
                isTrue: false,
                isFalse: true,
            },
            {
                fact: "Did I mention Korean Oppa?",
                isTrue: false,
                isFalse: true,
            },
            {
                fact: "Read all other facts again",
                isTrue: true,
                isFalse: false,
            }
        ],
    }

    onClickHandler = (event) => {
        console.log("Count going up")
        this.setState({
            // else should link to win or lose
            questionCount: this.state.questionCount < 10 ? this.state.questionCount + 1 : this.state.questionCount
        })
    }

    correctClickHandler = (event) => {
        const { questions, questionCount, correctCount, incorrectCount } = this.state
        this.setState({
            correctCount: questions[questionCount].isTrue ? correctCount + 1 : correctCount,
            incorrectCount: questions[questionCount].isFalse ? incorrectCount + 1 : incorrectCount,
        })
    }
    
    render() {
        return (
            <>
            <div>
                {/* Character will be Richard later. Placeholder now */}
                <img src="https://www.kindpng.com/picc/m/125-1250612_rick-and-morty-morty-png-transparent-png.png" alt="Placeholder" />
            </div>

            <div>
                <p>Correct: {this.state.correctCount} Incorrect: {this.state.incorrectCount}</p>
            </div>

            <div>
                {/* Questions here */}
                
                <p>{this.state.questions[this.state.questionCount].fact}</p>
                
            </div>

            <div>
                {/* True/False input buttons */}
                <button name="true" value="true" 
                onClick={() => {
                    this.onClickHandler()
                    this.correctClickHandler()
                }}>True</button>
                <button name="false" value="false" onClick={() => {
                    this.correctClickHandler()
                    this.onClickHandler()
                }}>False</button>
            </div>
            {console.log("CC", this.state.correctCount)}
            {console.log("IC", this.state.incorrectCount)}
            </>
        )
    }
}

export default Game