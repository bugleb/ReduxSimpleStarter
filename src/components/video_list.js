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
                <ul className="list-group">
                    {videoList}
                </ul>
            </div>
        );
    }
}

export default VideoList;