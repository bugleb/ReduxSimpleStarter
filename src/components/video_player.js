import React, { Component } from 'react';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        console.log('selectedVideo', this.props.selectedVideo);

        return (
            <div>video player</div>
        );
    }
}

export default VideoPlayer;