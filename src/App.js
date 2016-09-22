import React, { Component } from 'react';
//import ReactDOM from 'react-dom'; //imports in index.js
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


import logo from './logo.svg';
import './App.css';

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
          <h2>Welcome to React</h2>
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

      </div>
    );
  }
}

export default App;














