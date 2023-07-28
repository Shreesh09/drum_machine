import React from "react";
import {DrumPad} from "./drum_pad";
import './drums_style.css'

class Drums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clip: "",
        }
    }

    setClip = (clip) => {
        this.setState({
            clip: clip,
        });
    }

    render() {
        return (
           <div id="drum-machine">
               <div id="display">
                   <p id="display-text">{this.state.clip}</p>
                   <img alt="A Drim kit" src="https://drive.google.com/uc?export=view&id=1hqLNhOrvO42dUpS6phNVWPP57z2ICmgW"/>
                   <DrumPad id="Crash-Cymbal" pad="Q" setClip={this.setClip}/>
                   <DrumPad id="High-Tom" pad="W" setClip={this.setClip}/>
                   <DrumPad id="Medium-Tom" pad="E" setClip={this.setClip}/>
                   <DrumPad id="Ride-Cymbal" pad="A" setClip={this.setClip}/>
                   <DrumPad id="Hi-Hats" pad="S" setClip={this.setClip}/>
                   <DrumPad id="Snare-Drum" pad="D" setClip={this.setClip}/>
                   <DrumPad id="Bass-Pedal" pad="Z" setClip={this.setClip}/>
                   <DrumPad id="Floor-Tom" pad="X" setClip={this.setClip}/>
               </div>
           </div>
        );
    }
}

export {Drums};