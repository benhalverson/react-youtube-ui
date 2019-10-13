import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends Component {
  state = {
    searchTerm: 'coding music',
    videos: [],
    selectedVideo: null
  };

  onFormSubmit = searchTerm => {
    this.setState({
      ...this.state,
      searchTerm
    })
    this.submitSearch(searchTerm)
  };

  onVideoSelect = video => {
    // Sets state for video detail
    this.setState({ selectedVideo: video });
  };

  submitSearch = async (searchTerm) => {
    try {
      const response = await youtube
        .get('/search', {
          params: {
            q: searchTerm
          }
        })
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
    } catch (e) {
      console.log('API Failed ', e)
    }
  }

  componentDidMount () {
    this.submitSearch()
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui row">
          <SearchBar term={ this.state.searchTerm } onFormSubmit={this.onFormSubmit} />

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
