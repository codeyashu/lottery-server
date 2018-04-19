import React, { Component } from 'react';
import '../style/style.css';

import web3 from '../web3';
// import lottery from '../lottery';

import Head from './Head';
import Body from './Body';
import Status from './Status';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status_message: 'loading...'
    }
  }

  render() {
    return (
      <div className="App">
        <h1> Feeling Lucky? </h1>
        <Head />
        <Body />
        <Status status_message={this.state.status_message} />
      </div>
    );
  };
};

export default App;
