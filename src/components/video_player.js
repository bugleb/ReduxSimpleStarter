import React, { Component } from 'react';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('selectedVideo', this.props.selectedVideo);

        return (
            <div>
                <iframe
                    width='700'
                    height='394'
                    src={`https://www.youtube.com/embed/${this.props.selectedVideo.id}`}
                    frameBorder='0'
                >
                </iframe>
            </div>
        );
    }
}

export default VideoPlayer;