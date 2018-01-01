import { ActionTypes } from "../../constants";

export function openDialog(album) {
    return { type: ActionTypes.OPEN_ALBUM_DIALOG, album };
}

export function closeDialog() {
    return { type: ActionTypes.CLOSE_ALBUM_DIALOG };
}

export function pageChanged(pageNumber) {
    return { type: ActionTypes.PAGE_CHANGED, pageNumber};
}
