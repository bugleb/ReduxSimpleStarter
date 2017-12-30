import React, { Component } from 'react';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <iframe
                    width='700'
                    height='394'
                    src={`https://www.youtube.com/embed/${this.props.selectedVideo.id}`}
                    frameBorder='0'
                >
                </iframe>
                <div>
                    {this.props.selectedVideo.description}
                </div>
            </div>
        );
    }
}

export default VideoPlayer;