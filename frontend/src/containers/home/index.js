import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./actions";
import Header from "./inner-components/header";
import Footer from "./inner-components/footer";
import AlbumsList from "../albumList";
import AudioPlayer from "../audioPlayer";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch("/api/album/list")
            .then(res => res.json())
            .then(albums => this.props.actions.loadInitialData(albums));
    }

    render() {
        return (
            <div>
                <Header />
                <div className="body">
                    <AlbumsList />
                    <AudioPlayer />
                </div>
                <Footer track={this.props.selectedTrack} />
            </div>
        );
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

const mapStateToProps = (state, ownProps) => {
    return { selectedTrack: state.player.get("selectedTrack").toJS() };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
