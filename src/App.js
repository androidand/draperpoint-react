import React, { Component } from 'react';
// this will be used to add the views. We dont need this...
//import { AppRegistry, View } from 'react-native';
import './App.css';

import Stage from './Stage.js';
import Player from './Player.js';

import Mailto from 'react-mailto';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


class App extends Component {

  handleClick(e) {
    console.log("click", e);
  }

   handleTouchTap(e) {
    console.log("touchTap", e);
  }

  render() {
    return (


      <div className="App container">

        <div className="App-header">
          <h1 id="App-header-text">Draper Point</h1>
        </div>

        <div className="App-intro">
        <p id="App-intro-text">
          Vi är ett band som letar efter en sångare. Det är en fördel om du även är bra på att skriva text och låtar, samt även kan spela något instrument, främst då gitarr eller keyboard. Vi gillar rock, lyssna på våra demos här på sidan så får du en bättre bild av vad vi lirar.
        </p>
        </div>

      <a
         href="#"
         onTouchTap={this.handleTouchTap}
         onClick={this.handleClick}>
      </a>

       <Mailto email="info@draperpoint.net" obfuscate={true} headers={{subject: 'Sångare i Draper Point',body: 'Hej'}}>
        Maila oss!
      </Mailto>


       <div id="Stage-container" className="container">
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














