import React from 'react'
class Result extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.results}</h1>
                <h2>User: {this.props.userScore}</h2>
                <h2>Computer: {this.props.compScore}</h2>
            </div>
        )
    }
}

export default Result