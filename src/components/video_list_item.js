import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li
                className="list-group-item video-list-item"
                onClick={() => this.props.onVideoSelect(this.props.video)}
            >
                <div className="row">
                    <div className="col-md-5">
                        <img src={this.props.video.thumbnails.default.url} />
                    </div>
                    <div className="col-md-7">
                        <p className="video-thumbnail-title">{this.props.video.title}</p>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem;