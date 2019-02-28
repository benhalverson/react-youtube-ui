import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
class App extends Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    console.log('term', term);
    const opts = {
      q: term
    };
    const response = await youtube.get('/search', opts);
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
