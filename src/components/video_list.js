import React, { Component } from 'react';

import VideoListItem from './video_list_item';

class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('results', this.props.searchResults);
        return (
            <div>
                video list
                <VideoListItem />
            </div>
        );
    }
}

export default VideoList;