import { ActionTypes } from "../../constants";
import { TRACK_ENDED } from "./constants";

export function TrackTimeChanged(time) {
    return {
        type: ActionTypes.TRACK_TIME_CHANGED,
        time
    };
}

export function TrackMetadataUpdated(duration) {
    return {
        type: ActionTypes.TRACK_METADATA_UPDATED,
        duration
    };
}

export function TrackEnded() {
    return {
        type: TRACK_ENDED
    };
}
