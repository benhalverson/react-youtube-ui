import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
class App extends Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const opts = {
      q: term
    };
    const response = await youtube
      .get('/search', opts)
      .catch(e => console.log('API Failed ', e));
    this.setState({ videos: response.data.items });

    console.log('state', this.state.videos);
  };
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
