import React, { Component } from 'react';
//import ReactDOM from 'react-dom'; //imports in index.js
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


//import logo from './logo.svg';
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
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Draper Point</h1>
        </div>
        <p className="App-intro">
          We are a band looking for a singer.
          Listen to our demos and contact us if you want in! 
        </p>


        <a
         href="#"
         onTouchTap={this.handleTouchTap}
         onClick={this.handleClick}>
         info@draperpoint.net
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














