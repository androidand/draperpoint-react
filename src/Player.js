import React, { Component } from 'react';
import ReactHowler from 'react-howler';

class Player extends Component {
 render () {
  return ( 
  	<div>
  	  <ReactHowler
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        playing={true}
      />

  	 <div>ControlPanel</div>
  	 <div>PlayList</div>
  	</div> 
  );
 }
} 

export default Player;