import React, { Component } from "react";
import MusicController from "../musicController";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./actions";

class TrackList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.openedAlbum != null) {
            fetch(`/api/track/findByAlbumId/${this.props.openedAlbum.id}`)
                .then(response => response.json())
                .then(tracks => this.props.actions.updateTracks(tracks));
        }
    }

    render() {
        return (
            <div>
                {this.props.tracks.map(track => (
                    <MusicController key={track.id} track={track} />
                ))}
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
        openedAlbum: state.albums.get("openedAlbum"),
        tracks: state.tracks.get("trackList"),
        selectedTrack: state.player.get("selectedTrack").toJS(),
        isPlaying: state.player.get("isPlaying"),
        currentTime: state.player.get("currentTime"),
        totalTime: state.player.get("totalTime"),
        isMuted: state.player.get("isMuted"),
        volume: state.player.get("volume")
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
