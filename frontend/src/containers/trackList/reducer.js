import { ActionTypes } from "../../constants";
import { fromJS } from "immutable";

const initialState = fromJS({
    trackList: []
});

function tracksReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_TRACKS:
            return state.set("trackList", action.tracks);
        default:
            return state;
    }
}

export default tracksReducer;
