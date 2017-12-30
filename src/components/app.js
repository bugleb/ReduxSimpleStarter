import React, { Component } from 'react';
import search from 'youtube-search';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoPlayer from './video_player';

class App extends Component {
    constructor(props) {
        super(props);
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

            console.log('results', results);
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    searchForTerm={this.searchForTerm}
                />
                <VideoPlayer />
                <VideoList />
            </div>
        );
    }
}

export default App;