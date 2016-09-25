import React, { Component } from 'react';
//import ReactDOM from 'react-dom'; //imports in index.js
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


import logo from './logo.svg';
import './App.css';

import Stage from './Stage.js';
import Player from './Player.js';

class App extends Component {

  handleClick(e) {
    console.log("click", e);
  }

   handleTouchTap(e) {
    console.log("touchTap", e);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Draper Point</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <a
         href="#"
         onTouchTap={this.handleTouchTap}
         onClick={this.handleClick}>
         Tap Me
       </a>

       <div>
        <Stage />
       </div>

       <div>
        <Player />
       </div>

      </div>
    );
  }
}

export default App;














