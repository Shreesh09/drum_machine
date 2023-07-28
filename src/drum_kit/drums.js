import React from "react";
import {DrumPad} from "./drum_pad";

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
                   <DrumPad id="Heater1" pad="Q" setClip={this.setClip}/>
                   <DrumPad id="Heater2" pad="W" setClip={this.setClip}/>
                   <DrumPad id="Heater3" pad="E" setClip={this.setClip}/>
                   <DrumPad id="Heater4" pad="A" setClip={this.setClip}/>
                   <DrumPad id="Clap" pad="S" setClip={this.setClip}/>
                   <DrumPad id="Open-HH" pad="D" setClip={this.setClip}/>
                   <DrumPad id="Kick-n'-Hat" pad="Z" setClip={this.setClip}/>
                   <DrumPad id="Kick" pad="X" setClip={this.setClip}/>
                   <DrumPad id="Closed-HH" pad="C" setClip={this.setClip}/>
                   <p>{this.state.clip}</p>
               </div>
           </div>
        );
    }
}

export {Drums};