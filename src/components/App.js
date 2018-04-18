import React, { Component } from 'react';
import '../style/style.css';

import Head from './Head';
import Body from './Body';
import Status from './Status';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Feeling Lucky? </h1>
        <Head />
        <Body />
        <Status />
      </div>
    );
  };
};

export default App;
