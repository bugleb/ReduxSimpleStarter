import React, { Component } from 'react';
import search from 'youtube-search';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoPlayer from './video_player';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],
            selectedVideo: {},
        };

        this.searchForTerm = this.searchForTerm.bind(this);
        this.searchForTerm('tesla');
    }

    searchForTerm(term) {
        const options = {
            key: 'AIzaSyAdJY5pB4VD71kvSsQOTnQkaJ2ufPonrp4',
            maxResults: 10,
        };

        search(term, options, (err, results) => {
            if (err) {
                return console.error(err);
            }

            this.setState({
                searchResults: results,
                selectedVideo: results[0],
            });
        });
    }

    render() {
        return (
            <div className="row">
                <div className="row">
                    <div className="cold-col-md-12">
                        <SearchBar
                            searchForTerm={this.searchForTerm}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <VideoPlayer
                            selectedVideo={this.state.selectedVideo}
                        />
                    </div>
                    <div className="cold-md-4">
                        <VideoList
                            searchResults={this.state.searchResults}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;