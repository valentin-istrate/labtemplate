import React from "react";
import { EnviromentConstants } from "../../../constants";

export default function Album(props) {
    return (
        <div className="album-item" onClick={props.onClick}>
            <div className="album-item-image-container">
                <img
                    className="album-item-image"
                    src={`${EnviromentConstants.apiUrl}/media/icon/${
                        props.coverFileName
                    }`}
                />
            </div>
            <div className="album-item-band album-item-text-container">
                <div className="album-item-text">{props.bandName}</div>
            </div>
            <div className="album-item-name album-item-text-container">
                <div className="album-item-text">{props.albumName}</div>
            </div>
        </div>
    );
}
