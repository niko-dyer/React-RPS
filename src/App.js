import React, { Component } from 'react';
import './App.css';
import RPS from './RPS'
import { Container, Header } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Header as='h1'>Rock, Paper, Scissors</Header>
        <span>Click a Hand to Make Your Choice</span>
        <hr />
        <RPS />
      </Container>
    );
  }
}

export default App;
