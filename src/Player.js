import React, { Component } from 'react';
import Song from 'react-howler';
import raf from 'raf'; // requestAnimationFrame polyfill
//import Slider from './Slider.js';
import Slider from 'rc-slider';
require('rc-slider/assets/index.css');

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
      playing: false,
      loaded: false,
      loop: false,
      mute: false,
      current: this.files[0],
      //seek: 0,
      wanted: 0,
      volume: 0
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
    this.handleOnSlideSeek = this.handleOnSlideSeek.bind(this)

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
    console.log("Seek status: ",this.state.seek);
    this.handleToggle();

  if (change < this.files.length) {
   this.setState({
        current: this.files[change]
      })
  }
  else {
   console.log("Last song.");
  }
  this.handleToggle(); //Debug
}

handleOnSlideSeek (pos) {
  console.log(this.seeker.props);

  //this.player.pos() = 20;

  this.setState({
     wanted: 200
  })
  //this.player.pos(200);

//this.player.pause();
console.log("setting seek to: ")

this.player.seek(this.state.wanted);
  //this.renderSeekPos();
  console.log(this.state);
  console.log(this.player);


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

  
getMethods(obj) {
  console.log("In getMethods");

    var res = [];
    for(var m in obj) {
        if(typeof obj[m] === "function") {
            res.push(m)
        }
    }
    return res;
}


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
        pos={this.state.wanted}
      />

  	 <div id="controlPanel">

     <button className="material-icons" onClick={this.handleOnPrev}>
      {(this.state.playing) ? 'skip_previous' : 'skip_previous'}
     </button>
     
      <button className="material-icons" onClick={this.handleToggle}>
        {(this.state.playing) ? 'pause_circle_outline' : 'play_circle_outline'}
      </button>

      <button className="material-icons" onClick={this.handleOnNext}>
        {(this.state.playing) ? 'skip_next' : 'skip_next'}
      </button>

      <p>{(this.state.loaded) ? 'Loaded' : 'Loading'}</p>
      <p>{this.state.current["name"]}</p>
     
        <p>
          {(this.state.seek !== undefined) ? this.timeFormat(this.state.seek) : '--:--'}
          {' / '}
          {(this.state.duration) ? this.timeFormat(this.state.duration) : '--:--'}

        </p>

        <div> 
        <p>Position</p> 
          
          <Slider 
            id="positionSlider"
            value={(this.state.playing) ? this.state.seek : 0 } 
            defaultValue={0} 
            min={0} 
            max={this.state.duration}
            onChange={this.onSliderChangeNoActionYet}
        />
        </div>

        <div> 
        <p>Seek</p> 
          
          <Slider
            id="seeker"
            ref={(ref) => this.seeker = ref}
            defaultValue={0} 
            min={0} 
            max={this.state.duration}
            onAfterChange={this.handleOnSlideSeek}
        />
        </div>

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


<i className="material-icons">pause</i>
<i className="material-icons">pause_circle_filled</i>
<i className="material-icons">pause_circle_outline</i>

<i className="material-icons">fast_forward</i>
<i className="material-icons">fast_rewind</i>
<i className="material-icons">fiber_manual_record</i>
<i className="material-icons">play_arrow</i>

<i className="material-icons">play_circle_filled</i>
<i className="material-icons">play_circle_outline</i>

<i className="material-icons">skip_next</i>
<i className="material-icons">skip_previous</i>

<i className="material-icons">replay</i>
<i className="material-icons">repeat</i>
<i className="material-icons">stop</i>
<i className="material-icons">loop</i>
<i className="material-icons">mic</i>
<i className="material-icons">volume_up</i>
<i className="material-icons">volume_down</i>

<i className="material-icons">volume_mute</i>
<i className="material-icons">volume_off</i>

<i className="material-icons">album</i>

     </div>

  	 
     <div>PlayList</div>
  	
    </div> 
  );
 }
} 

export default Player;