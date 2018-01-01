import { ActionTypes } from "../../constants";

export function playTrack(track, status) {
    return {
        type: ActionTypes.PLAY_TRACK,
        track,
        status
    };
}

export function startSeeking() {
    return {
        type: ActionTypes.SEEKING_STARTED
    };
}

export function endSeeking() {
    return {
        type: ActionTypes.SEEKING_ENDED
    };
}

export function updateTrackTime(time) {
    return {
        type: ActionTypes.TRACK_SEEKING,
        time
    };
}

export function toggleMute(isMuted) {
    return {
        type: ActionTypes.TRACK_MUTE_TOGGLE,
        isMuted
    };
}

export function updateVolume(volume) {
    return {
        type: ActionTypes.VOLUME_UPDATED,
        volume
    };
}
