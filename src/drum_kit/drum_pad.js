import React from "react";
import {pads} from "./drums_constants";
import PropTypes from "prop-types";

class DrumPad extends React.Component
{
    playDrumOnClick = () => {
        this.props.setClip(this.props.id);
        document.getElementById(this.props.pad).play();
    }

    playDrumOnKey = (event) => {
        if(event.keyCode === this.props.pad.charCodeAt(0)) {
            console.log("pressed");
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