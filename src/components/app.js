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
            <div>
                <SearchBar
                    searchForTerm={this.searchForTerm}
                />
                <VideoPlayer
                    selectedVideo={this.state.selectedVideo}
                />
                <VideoList
                    searchResults={this.state.searchResults}
                />
            </div>
        );
    }
}

export default App;