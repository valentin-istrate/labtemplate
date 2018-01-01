import { ActionTypes } from "../../constants";

export function loadInitialData(albums) {
    return { type: ActionTypes.LOAD_INITIAL_DATA, albums };
}
