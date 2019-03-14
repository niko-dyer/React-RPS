import React from 'react'
class Result extends React.Component {
    
    render() {
        if (this.props.results === 'Winner!') {
            return (
                <div>
                    <h1>{this.props.userHand} VS {this.props.compHand}</h1>
                    <h1 style={styles.winner}>{this.props.results}</h1>
                    <h2>User: {this.props.userScore}</h2>
                    <h2>Computer: {this.props.compScore}</h2>
                </div>
            )
        } else if (this.props.results === 'Tie!') {
            return (
                <div>
                    <h1>{this.props.userHand} VS {this.props.compHand}</h1>
                    <h1 style={styles.tie}>{this.props.results}</h1>
                    <h2>User: {this.props.userScore}</h2>
                    <h2>Computer: {this.props.compScore}</h2>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>{this.props.userHand} VS {this.props.compHand}</h1>
                    <h1 style={styles.loser}>{this.props.results}</h1>
                    <h2>User: {this.props.userScore}</h2>
                    <h2>Computer: {this.props.compScore}</h2>
                </div>
            )
        }
    }
}

const styles = {
    winner: {
        color: 'green'
    },

    loser: {
        color: 'red'
    },

    tie: {
        color: 'blue'
    }
}

export default Result