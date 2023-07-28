import React from "react";
import {pads} from "./drums_constants";
import PropTypes from "prop-types";
import './drum_pad_style.css'

class DrumPad extends React.Component
{
    constructor(props) {
        super(props);
    }
    playDrumOnClick = () => {
        document.getElementById(this.props.id).classList.add("clicked");
        this.props.setClip(this.props.id);
        document.getElementById(this.props.pad).play();
        window.setTimeout(() => {
            document.getElementById(this.props.id).classList.remove("clicked");
        }, 200);
        //document.getElementById(this.props.id).classList.remove("clicked");
    }

    playDrumOnKey = (event) => {
        if(event.keyCode === this.props.pad.charCodeAt(0)) {
            document.getElementById(this.props.id).classList.add("clicked");
            window.setTimeout(() => {
                document.getElementById(this.props.id).classList.remove("clicked");
            }, 100);
            this.props.setClip(this.props.id);
            document.getElementById(this.props.pad).currentTime = 0;
            this.props.setClip(this.props.id);
            document.getElementById(this.props.pad).play();
        }
    }

    componentDidMount() {
        document.getElementById(this.props.id).addEventListener("click", this.playDrumOnClick);
        document.addEventListener("keydown", this.playDrumOnKey);
    }

    componentWillUnmount() {
        document.getElementById(this.props.id).removeEventListener("click", this.playDrumOnClick);
        document.removeEventListener("keydown", this.playDrumOnKey);
    }

    render() {
        return (
            <div className="drum-pad" id={this.props.id}>
                <p>{this.props.pad}</p>
                <audio preload="auto" className="clip" id={this.props.pad} src={pads[this.props.pad]}></audio>
            </div>
        )
    }
}

DrumPad.propTypes = {
    pad: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    setClip: PropTypes.func,
}


export {DrumPad};