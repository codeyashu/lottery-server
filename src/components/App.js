import React, { Component } from 'react';
import '../style/style.css';

import web3 from '../web3';
import lottery from '../lottery';

import Head from './Head';
import Body from './Body';
import Status from './Status';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manager: '',
      balance: '',
      players: [],
      status_message: 'loading...'
    }
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({ manager, players, balance });
  }

  render() {
    return (
      <div className="App">
        <h1> Feeling Lucky? </h1>
        <Head manager={this.state.manager} balance={this.state.balance} player_count={this.state.players.length} />
        <Body />
        <Status status_message={this.state.status_message} />
      </div>
    );
  };
};

export default App;
