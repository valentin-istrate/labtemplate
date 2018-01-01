import { combineReducers } from "redux";
import albums from "../containers/albumList/reducer";
import tracks from "../containers/trackList/reducer";
import player from "../containers/audioPlayer/reducer";

const rootReducer = combineReducers({
    albums,
    tracks,
    player
});

export default rootReducer;
