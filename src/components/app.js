import React, { Component } from 'react';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoPlayer from './video_player';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoPlayer />
        <VideoList />
      </div>
    );
  }
}
