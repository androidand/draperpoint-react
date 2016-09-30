import React, { Component } from 'react';
//import ReactDOM from 'react-dom'; //imports in index.js
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


//import logo from './logo.svg';
import './App.css';

import Stage from './Stage.js';
import Player from './Player.js';

//var Mailto = require('react-mailto');
import Mailto from 'react-mailto';

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
          Vi är ett band som letar efter en sångare. Det är en fördel om du även är bra på att skriva text och låtar, samt även kan spela något instrument, främst då gitarr eller keyboard. Vi gillar rock, lyssna på våra demos här på sidan så får du en bättre bild av vad vi lirar.
        </p>


        <a
         href="#"
         onTouchTap={this.handleTouchTap}
         onClick={this.handleClick}>
       </a>

       <Mailto email="info@draperpoint.net" obfuscate={true} headers={{subject: 'Sångare i Draper Point',body: 'Hej'}}>
        Maila oss!
      </Mailto>

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














