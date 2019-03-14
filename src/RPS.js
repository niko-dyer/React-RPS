import React from 'react'
import { Image, Button } from 'semantic-ui-react'
import Result from './Result'

class RPS extends React.Component {
    state = { 
        displayResult: false,
        choices: ['Rock', 'Paper', 'Scissors'], 
        result: '', 
        userScore: 0, 
        compScore: 0,
        userHand: '',
        compHand: ''
      }

    rock = () => {
        let randomNumber = Math.floor(Math.random()*this.state.choices.length)
        let compChoice = this.state.choices[randomNumber]
        this.setState({userHand: 'Rock'})
        if (compChoice === 'Rock') {
            this.setState({result: 'Tie!'})
        } else if (compChoice === 'Scissors') {
            this.setState({result: 'Winner!', userScore: this.state.userScore + 1, compHand: compChoice})
        } else {
            this.setState({result: 'Loser :(', compScore: this.state.compScore + 1, compHand: compChoice})
        }
        this.setState({displayResult: true})
    }

    paper = () => {
        let randomNumber = Math.floor(Math.random()*this.state.choices.length)
        let compChoice = this.state.choices[randomNumber]
        this.setState({userHand: 'Paper'})
        if (compChoice === 'Paper') {
            this.setState({result: 'Tie!', compHand: compChoice}) 
        } else if (compChoice === 'Rock') {
            this.setState({result: 'Winner!', userScore: this.state.userScore + 1, compHand: compChoice})
        } else {
            this.setState({result: 'Loser :(', compScore: this.state.compScore + 1, compHand: compChoice})
        }
        this.setState({displayResult: true})
    }

    scissors = () => {
        let randomNumber = Math.floor(Math.random()*this.state.choices.length)
        let compChoice = this.state.choices[randomNumber]
        this.setState({userHand: 'Scissors'})
        if (compChoice === 'Scissors') {
            this.setState({result: 'Tie!', compHand: compChoice})
        } else if (compChoice === 'Paper') {
            this.setState({result: 'Winner!', userScore: this.state.userScore + 1, compHand: compChoice})
        } else {
            this.setState({result: 'Loser :(', compScore: this.state.compScore + 1, compHand: compChoice})
        }
        this.setState({displayResult: true})
    }

    handleReset = () => {
        this.setState({displayResult: false, userScore: 0, compScore: 0})
    }

    render () {
        return (
            <div>
                <div style={{display: 'flex', cursor: 'pointer', justifyContent: 'center'}}>
                    <Image onClick={this.rock} style={{padding: '20px'}} src='https://i.stack.imgur.com/EiThU.jpg' size='medium' />
                    <Image onClick={this.paper} style={{padding: '20px'}} src='https://cdn.iconscout.com/icon/free/png-256/hand-stop-highfive-paper-sign-symbol-gesture-show-game-46256.png' size='medium' />
                    <Image onClick={this.scissors} style={{padding: '20px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIR7pYL8irGxz8nIVirjWGnXyXBx9uUW8xg4NhfqDWcYi_4-nTDA' size='medium' />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    { this.state.displayResult && <Result results={this.state.result} userScore={this.state.userScore} compScore={this.state.compScore} userHand={this.state.userHand} compHand={this.state.compHand} /> }
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button onClick={this.handleReset}>Reset</Button>
                </div>
            </div>
        )
    }
}

export default RPS