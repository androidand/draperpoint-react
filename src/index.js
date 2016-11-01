import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

ReactDOM.render(
	<div>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="Draper Point."  style={{backgroundColor: '#ce2d2d', minHeight: 75, padding: '5px'}} titleStyle={{textAlign: "center", fontSize: "40px"}} />

  </MuiThemeProvider>
  <App />
  </div>,
  document.getElementById('root')
);
