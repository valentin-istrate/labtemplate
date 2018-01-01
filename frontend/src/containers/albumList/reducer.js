import { ActionTypes } from "../../constants";
import { fromJS } from "immutable";

const initialState = fromJS({
    albumsList: [],
    openedAlbum: null,
    pageIndex: 0,
    pageSize: 20
});

function albumsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOAD_INITIAL_DATA:
            return state.set("albumsList", action.albums);
        case ActionTypes.OPEN_ALBUM_DIALOG:
            return state.set("openedAlbum", action.album);
        case ActionTypes.CLOSE_ALBUM_DIALOG:
            return state.set("openedAlbum", null);
        case ActionTypes.PAGE_CHANGED:
            return state.set("pageIndex", action.pageNumber - 1);
        default:
            return state;
    }
}

export default albumsReducer;
