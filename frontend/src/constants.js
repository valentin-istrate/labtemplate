import * as HomeActionTypes from "./containers/home/constants";
import * as AlbumListActionTypes from "./containers/albumList/constants";
import * as TrackListActionTypes from "./containers/trackList/constants";
import * as AudioPlayerActionTypes from "./containers/audioPlayer/constants";

export const ActionTypes = Object.assign(
    {},
    HomeActionTypes,
    AlbumListActionTypes,
    TrackListActionTypes,
    AudioPlayerActionTypes
);

export const EnviromentConstants = {
    apiUrl: "http://localhost:3001/api"
};
