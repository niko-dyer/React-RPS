import React from 'react'
import { Image, Button } from 'semantic-ui-react'
import Result from './Result'

class RPS extends React.Component {
    state = { displayResult: false, choices: ['rock', 'paper', 'scissors'], result: '', userScore: 0, compScore: 0 }

    rock = () => {
        let randomNumber = Math.floor(Math.random()*this.state.choices.length)
        let compChoice = this.state.choices[randomNumber]
        if (compChoice === 'rock') {
            this.setState({result: 'Tie!'})
        } else if (compChoice === 'scissors') {
            this.setState({result: 'Winner!', userScore: this.state.userScore + 1})
        } else {
            this.setState({result: 'Loser :(', compScore: this.state.compScore + 1})
        }
        this.setState({displayResult: !this.state.displayResult})
    }

    paper = () => {
        let randomNumber = Math.floor(Math.random()*this.state.choices.length)
        let compChoice = this.state.choices[randomNumber]
        if (compChoice === 'paper') {
            this.setState({result: 'Tie!'}) 
        } else if (compChoice === 'rock') {
            this.setState({result: 'Winner!', userScore: this.state.userScore + 1})
        } else {
            this.setState({result: 'Loser :(', compScore: this.state.compScore + 1})
        }
        this.setState({displayResult: !this.state.displayResult})
    }

    scissors = () => {
        let randomNumber = Math.floor(Math.random()*this.state.choices.length)
        let compChoice = this.state.choices[randomNumber]
        if (compChoice === 'scissors') {
            this.setState({result: 'Tie!'})
        } else if (compChoice === 'paper') {
            this.setState({result: 'Winner!', userScore: this.state.userScore + 1})
        } else {
            this.setState({result: 'Loser :(', compScore: this.state.compScore + 1})
        }
        this.setState({displayResult: !this.state.displayResult})
    }

    handleReset = () => {
        this.setState({displayResult: false})
    }

    render () {
        return (
            <div style={{display: 'flex', cursor: 'pointer', justifyContent: 'center'}}>
                <Image onClick={this.rock} style={{padding: '20px'}} src='https://i.stack.imgur.com/EiThU.jpg' size='medium' />
                <Image onClick={this.paper} style={{padding: '20px'}} src='https://cdn.iconscout.com/icon/free/png-256/hand-stop-highfive-paper-sign-symbol-gesture-show-game-46256.png' size='medium' />
                <Image onClick={this.scissors} style={{padding: '20px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIR7pYL8irGxz8nIVirjWGnXyXBx9uUW8xg4NhfqDWcYi_4-nTDA' size='medium' />
                { this.state.displayResult && <Result results={this.state.result} userScore={this.state.userScore} compScore={this.state.compScore} /> }
                <Button onClick={this.handleReset}>Reset</Button>
            </div>
        )
    }
}

export default RPS