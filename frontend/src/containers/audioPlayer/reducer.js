import { fromJS } from "immutable";
import { ActionTypes } from "../../constants";

const initialState = fromJS({
    selectedTrack: {},
    isPlaying: false,
    currentTime: 0,
    totalTime: 0,
    volume: 0.5,
    isMuted: false,
    isSeeking: false
});

function getUpdatedTrackState(state, track, isPlaying) {
    const selectedTrack = state.get("selectedTrack").toJS();
    if (selectedTrack.id === track.id) {
        return { isPlaying };
    }

    return {
        isPlaying: true,
        selectedTrack: track,
        currentTime: 0
    };
}

function audioPlayerReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.PLAY_TRACK:
            let updatedState = getUpdatedTrackState(
                state,
                action.track,
                action.status
            );
            return state.merge(updatedState);
        case ActionTypes.TRACK_METADATA_UPDATED:
            return state.set("totalTime", action.duration);
        case ActionTypes.TRACK_TIME_CHANGED:
            return state.set("currentTime", action.time);
        case ActionTypes.TRACK_ENDED:
            return state.merge({ currentTime: 0, isPlaying: false });
        case ActionTypes.TRACK_SEEKING:
            return state.set("currentTime", action.time);
        case ActionTypes.TRACK_MUTE_TOGGLE:
            return state.set("isMuted", action.isMuted);
        case ActionTypes.SEEKING_STARTED:
            return state.set("isSeeking", true);
        case ActionTypes.SEEKING_ENDED:
            return state.set("isSeeking", false);
        case ActionTypes.VOLUME_UPDATED:
            return state.set("volume", action.volume);
        default:
            return state;
    }
}

export default audioPlayerReducer;
