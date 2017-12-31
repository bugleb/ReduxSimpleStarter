import React, { Component } from 'react';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-img-top video-iframe">
                    <iframe
                        style={{position: "absolute"}}
                        width='100%'
                        height='100%'
                        src={`https://www.youtube.com/embed/${this.props.selectedVideo.id}`}
                        frameBorder='0'
                    >
                    </iframe>
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        Description
                    </h5>
                    <div className="card-text">
                        {this.props.selectedVideo.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;