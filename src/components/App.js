import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
class App extends Component {
  // state = { video: [] };

  onSearchSubmit = async term => {
    console.log('term', term);
    const opts = {
      q: term
    };
    const response = await youtube.get('/search', opts);
    // this.setState({ video: response });
    console.log('youtube data', response);
  };
  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
