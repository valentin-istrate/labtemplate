import React from "react";
import { AppBar } from "material-ui";

export default function Header(props) {
    return (
        <div className="header">
            <AppBar
                className="header"
                title={<span className="header-title">Music Player</span>}
                showMenuIconButton={false}
            />
        </div>
    );
}
