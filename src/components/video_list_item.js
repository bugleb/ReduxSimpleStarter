import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.video.title}
            </div>
        );
    }
}

export default VideoListItem;