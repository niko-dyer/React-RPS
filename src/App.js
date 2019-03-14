import React, { Component } from 'react';
import './App.css';
import RPS from './RPS'
import { Container, Header, Icon } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Header as='h1' icon >
          <Icon name='hand rock outline' circular />
          <Header.Content>Rock, Paper, Scissors</Header.Content>
        </Header>
        <br />
        <span>Click a Hand to Make Your Choice</span>
        <hr />
        <RPS />
      </Container>
    );
  }
}

export default App;
