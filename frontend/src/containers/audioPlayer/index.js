import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./actions";
import { EnviromentConstants } from "../../constants";

class AudioPlayer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isPlaying && this.player.paused && !this.player.ended) {
            this.player.play();
        } else if (!nextProps.isPlaying && !this.player.paused) {
            this.player.pause();
        }
        if (nextProps.isSeeking === true) {
            this.player.currentTime = nextProps.currentTime;
        }
        if (nextProps.isMuted !== this.player.muted) {
            this.player.muted = nextProps.isMuted;
        }
        if (nextProps.volume !== this.player.volume) {
            this.player.volume = nextProps.volume;
        }
    }
    render() {
        return (
            <audio
                src={`${EnviromentConstants.apiUrl}/media/track/${
                    this.props.selectedTrack.fileName
                }`}
                ref={audio => (this.player = audio)}
                onTimeUpdate={() =>
                    this.props.actions.TrackTimeChanged(this.player.currentTime)
                }
                onLoadedMetadata={() =>
                    this.props.actions.TrackMetadataUpdated(
                        this.player.duration
                    )
                }
                onEnded={() => this.props.actions.TrackEnded()}
            />
        );
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const mapStateToProps = (state, props) => {
    return {
        selectedTrack: state.player.get("selectedTrack").toJS(),
        isPlaying: state.player.get("isPlaying"),
        currentTime: state.player.get("currentTime"),
        isSeeking: state.player.get("isSeeking"),
        isMuted: state.player.get("isMuted"),
        volume: state.player.get("volume")
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
