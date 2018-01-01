import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./actions";
import {
    PlaybackControls,
    ProgressBar,
    TimeMarker,
    MuteToggleButton,
    TimeMarkerType
} from "react-player-controls";

class MusicController extends Component {
    constructor(props) {
        super(props);

        this.isSelected = this.isSelected.bind(this);
    }

    isSelected() {
        return this.props.selectedTrack.id === this.props.track.id;
    };

    render() {
        return (
            <div className="music-controller-wrapper">
                <div
                    className={
                        "music-controller-container" +
                        (this.isSelected() ? " music-controller-active" : "")
                    }
                >
                    <div className="music-controller-play-pause-button">
                        <PlaybackControls
                            showNext={false}
                            showPrevious={false}
                            isPlayable={true}
                            isPlaying={
                                this.props.isPlaying && this.isSelected()
                            }
                            onPlaybackChange={isPlaying =>
                                this.props.actions.playTrack(this.props.track, isPlaying)
                            }
                        />
                    </div>
                    <div className="music-controller-info">
                        <div className="music-controller-name">
                            {this.props.track.trackNumber +
                                ". " +
                                this.props.track.trackName}
                        </div>
                        <div className="music-controller-time-slider">
                            <div className="music-controller-time">
                                <TimeMarker
                                    totalTime={this.props.totalTime}
                                    currentTime={this.props.currentTime}
                                    markerSeparator="/"
                                    firstMarkerType={TimeMarkerType.ELAPSED}
                                    secondMarkerType={TimeMarkerType.DURATION}
                                />
                            </div>
                            <div className="music-controller-slider">
                                <ProgressBar
                                    totalTime={this.props.totalTime}
                                    currentTime={this.props.currentTime}
                                    isSeekable={true}
                                    onSeekStart={() =>
                                        this.props.actions.startSeeking()
                                    }
                                    onSeekEnd={() =>
                                        this.props.actions.endSeeking()
                                    }
                                    onSeek={time =>
                                        this.props.actions.updateTrackTime(time)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="music-controller-mute">
                        <MuteToggleButton
                            isEnabled={true}
                            isMuted={this.props.isMuted}
                            onMuteChange={isMuted =>
                                this.props.actions.toggleMute(isMuted)
                            }
                        />
                    </div>
                    <div className="music-controller-volume-wrapper">
                        <div className="music-controller-volume-container">
                            <div className="music-controller-volume">
                                <ProgressBar
                                    currentTime={this.props.volume}
                                    isSeekable={true}
                                    onSeek={volume =>
                                        this.props.actions.updateVolume(volume)
                                    }
                                    totalTime={1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedTrack: state.player.get("selectedTrack").toJS(),
        isPlaying: state.player.get("isPlaying"),
        currentTime: state.player.get("currentTime"),
        totalTime: state.player.get("totalTime"),
        isMuted: state.player.get("isMuted"),
        volume: state.player.get("volume")
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicController);
