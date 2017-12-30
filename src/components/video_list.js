import React, { Component } from 'react';

import VideoListItem from './video_list_item';

class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const videoList = this.props.searchResults.map((video) =>
            <VideoListItem
                key={video.id}
                video={video}
            />
        );

        return (
            <div>
                {videoList}
            </div>
        );
    }
}

export default VideoList;