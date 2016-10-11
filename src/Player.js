import React, { Component } from 'react';
import Audio from 'react-howler';
import raf from 'raf'; // requestAnimationFrame polyfill

class Player extends Component {
  //how does this work? Read a book man! setState?
  constructor (props) {
    super(props)

    this.state = {
      playing: true,
      loaded: false,
      loop: false,
      mute: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleOnLoad = this.handleOnLoad.bind(this)
    this.handleOnEnd = this.handleOnEnd.bind(this)
    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.renderSeekPos = this.renderSeekPos.bind(this)
    this.handleLoopToggle = this.handleLoopToggle.bind(this)
    this.handleMuteToggle = this.handleMuteToggle.bind(this)

    this.handleOnNext = this.handleOnNext.bind(this)

    this.files = [
        'https://s3-eu-west-1.amazonaws.com/thanksforthe-media/160807+You+Want+Me+To+Go+Let+It+Go+Jam.mp3',
        'https://s3-eu-west-1.amazonaws.com/thanksforthe-media/Rock+It+tonight....m4a'
        ];
  }
//Alotta functions
componentWillUnmount () {
  this.clearRAF()
}

handleToggle () {
  this.setState({
    playing: !this.state.playing
  })
}

handleOnLoad () {
  this.setState({
    loaded: true,
    duration: this.player.duration()
  })
}

handleOnPlay () {
  this.setState({
    playing: true
  })
}

handleOnEnd () {
  this.setState({
    playing: false
  })
  this.clearRAF()
}



  handleOnPrev () {
    this.prev();
  }

  handleOnNext () {
    console.log( this.getMethods(this) );
    
    //this.next();
  }





handleLoopToggle () {
  this.setState({
    loop: !this.state.loop
  })
}

handleMuteToggle () {
  this.setState({
    mute: !this.state.mute
  })
}

renderSeekPos () {
   this.setState({
     seek: this.player.seek()
   })
   if (this.state.playing) {
     this._raf = raf(this.renderSeekPos)
   }
}

clearRAF () {
  raf.cancel(this._raf)
}


  
getMethods(obj)
{
    var res = [];
    for(var m in obj) {
        if(typeof obj[m] == "function") {
            res.push(m)
        }
    }
    return res;
}


/*
        Var files=[
        "https://s3-eu-west-1.amazonaws.com/thanksforthe-media/160807+You+Want+Me+To+Go+Let+It+Go+Jam.mp3",
        "https://s3-eu-west-1.amazonaws.com/thanksforthe-media/Rock+It+tonight....m4a"
        ];
*/


 render () {
  return ( 
  	<div className="container">



  	  <Audio
        src={this.files}
        playing={this.state.playing}
        onLoad={this.handleOnLoad}
        onPlay={this.handleOnPlay}
        onEnd={this.handleOnEnd}
        loop={this.state.loop}
        mute={this.state.mute}
        ref={(ref) => this.player = ref}
      />

  	 <div id="controlPanel">
     
      <button onClick={this.handleToggle}>
        {(this.state.playing) ? 'Pause' : 'Play'}
      </button>

      <button onClick={this.handleOnNext}>
        {(this.state.playing) ? 'Next' : 'Next!'}
      </button>

      <p>{(this.state.loaded) ? 'Loaded' : 'Loading'}</p>
     
        <p>
          {'Status: '}
          {(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : 'NaN'}
          {' / '}
          {(this.state.duration) ? this.state.duration.toFixed(2) : 'NaN'}
        </p>

        <label>
          Loop:
            <input
              type='checkbox'
              checked={this.state.loop}
              onChange={this.handleLoopToggle}
            />
        </label>

        <label>
          Mute:
            <input
              type='checkbox'
              checked={this.state.mute}
              onChange={this.handleMuteToggle}
            />
        </label>


     </div>

  	 
     <div>PlayList</div>
  	
    </div> 
  );
 }
} 

export default Player;