import React from "react";
import MusicController from "../../musicController";

export default function Header(props) {
    return (
        <footer className={"footer" + (props.track.id == null ? " hidden" : "")}>
            <div className="footer-wrapper">
                <div className="footer-container">
                    <MusicController track={props.track} />
                </div>
            </div>
        </footer>
    );
}
