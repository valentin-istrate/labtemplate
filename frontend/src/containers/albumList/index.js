import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as albumActions from "./actions";
import Album from "./inner-components/album";
import { Dialog } from "material-ui";
import TrackList from "../trackList";
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.min.css";

class AlbumList extends Component {
    render() {
        return (
            <div>
                <div className="album-list-wrapper">
                    <div className="album-list-container">
                        {this.props.albums
                            .slice(
                                this.props.pageSize * this.props.pageIndex,
                                this.props.pageSize * (this.props.pageIndex + 1)
                            )
                            .map((album, index) => (
                                <Album
                                    onClick={() =>
                                        this.props.actions.openDialog(album)
                                    }
                                    key={album.id}
                                    actions={this.props.actions}
                                    {...album}
                                />
                            ))}
                    </div>
                    <div className="album-list-pagination">
                        <Pagination
                            activePage={this.props.pageIndex + 1}
                            itemsCountPerPage={this.props.pageSize}
                            totalItemsCount={this.props.albums.length}
                            onChange={pageNumber =>
                                this.props.actions.pageChanged(pageNumber)
                            }
                            pageRangeDisplayed={3}
                        />
                    </div>
                </div>
                <Dialog
                    title={
                        this.props.openedAlbum != null
                            ? `${this.props.openedAlbum.bandName} - ${
                                  this.props.openedAlbum.albumName
                              }`
                            : ""
                    }
                    open={this.props.openedAlbum != null}
                    contentClassName="album-dialog-content"
                    bodyClassName="album-dialog-body"
                    titleClassName="album-dialog-title"
                    autoScrollBodyContent={true}
                    onRequestClose={event => this.props.actions.closeDialog()}
                >
                    <TrackList />
                </Dialog>
            </div>
        );
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(albumActions, dispatch)
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        albums: state.albums.get("albumsList"),
        pageSize: state.albums.get("pageSize"),
        pageIndex: state.albums.get("pageIndex"),
        openedAlbum: state.albums.get("openedAlbum")
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
