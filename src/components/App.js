import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube
      .get('/search', {
        params: {
          q: term
        }
      })
      .catch(e => console.log('API Failed ', e));
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    // Sets state for video detail
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit('coding music');
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui row">
          <SearchBar onFormSubmit={this.onTermSubmit} />

          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
        </div>
        <div className="five wide column">
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
