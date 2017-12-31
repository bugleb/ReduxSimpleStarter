import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item video-list-item">
                {this.props.video.title}
            </li>
        );
    }
}

export default VideoListItem;