import React, { Component } from 'react';
 
//import stage from './stage1.svg';

//Import and convert svg to react component
var Image1 = require('react-svg?es5=1!./stage1.svg');
class Stage extends Component {

 render () {
  return (
   <div>
    

	<Image1 width={50} height={50}/>




   </div>
  );
 }
}

export default Stage;