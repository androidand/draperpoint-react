import React from "react";

export default class Slider extends React.Component {
    
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
      current: this.files[0]
    }
  }

    render() {
        return <div >
        hej
               </div> 
    
    }

}