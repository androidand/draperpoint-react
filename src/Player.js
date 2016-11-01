import React, { Component } from 'react';
import Song from 'react-howler';
import raf from 'raf'; // requestAnimationFrame polyfill

class Player extends Component {
  //how does this work? Read a book man! setState?
  constructor (props) {
    super(props)

        this.files = [
        {"url":"https://s3-eu-west-1.amazonaws.com/thanksforthe-media/160807+You+Want+Me+To+Go+Let+It+Go+Jam.mp3","name":"You want me to go (Demo)"},
        {"url":"https://s3-eu-west-1.amazonaws.com/thanksforthe-media/Rock+It+tonight....m4a","name":"Rock it tonight (Demo)"},
        {"url":"https://s3-eu-west-1.amazonaws.com/thanksforthe-media/Rock+It+tonight....m4a","name":"Another song (Demo)"}
        ];

    this.state = {
      playing: true,
      loaded: false,
      loop: false,
      mute: false,
      current: this.files[0]
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleOnLoad = this.handleOnLoad.bind(this)
    this.handleOnEnd = this.handleOnEnd.bind(this)
    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.renderSeekPos = this.renderSeekPos.bind(this)
    this.handleLoopToggle = this.handleLoopToggle.bind(this)
    this.handleMuteToggle = this.handleMuteToggle.bind(this)

    this.handleOnNext = this.handleOnNext.bind(this)
    this.handleOnPrev = this.handleOnPrev.bind(this)

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
  this.renderSeekPos();
}

handleOnEnd () {
  this.setState({
    playing: false
  })
  this.clearRAF()
}



  handleOnPrev () {
    let change = (this.files.indexOf(this.state.current) - 1);

  if (change >= 0) {
    this.setState({
       current: this.files[change]
     })
  }
  else {
   console.log("First song.");
  }  
}

  handleOnNext () {
    let change = (this.files.indexOf(this.state.current) + 1);

  if (change < this.files.length) {
   this.setState({
        current: this.files[change]
      })
  }
  else {
   console.log("Last song.");
  }
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


timeFormat (totalSeconds) {
 totalSeconds %= 3600;
 let minutes = Math.floor(totalSeconds / 60);
 let seconds = totalSeconds % 60;
 return this.pad(minutes.toFixed(0))+":"+this.pad(seconds.toFixed(0));
}

pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

  
getMethods(obj)
{
    var res = [];
    for(var m in obj) {
        if(typeof obj[m] === "function") {
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



  	  <Song
        src={this.state.current["url"]}
        playing={this.state.playing}
        onLoad={this.handleOnLoad}
        onPlay={this.handleOnPlay}
        onEnd={this.handleOnEnd}
        loop={this.state.loop}
        mute={this.state.mute}
        ref={(ref) => this.player = ref}
      />

  	 <div id="controlPanel">

     <p className="material-icon">play</p>

     <button onClick={this.handleOnPrev}>
      {(this.state.playing) ? 'Prev' : 'Prev!'}
     </button>
     
      <button onClick={this.handleToggle}>
        {(this.state.playing) ? 'Pause' : 'Play'}
      </button>

      <button onClick={this.handleOnNext}>
        {(this.state.playing) ? 'Next' : 'Next!'}
      </button>

      <p>{(this.state.loaded) ? 'Loaded' : 'Loading'}</p>
      <p>{this.state.current["name"]}</p>
     
        <p>
          {(this.state.seek !== undefined) ? this.timeFormat(this.state.seek) : '-'}
          {' / '}
          {(this.state.duration) ? this.timeFormat(this.state.duration) : '-'}

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