import React, { Component } from 'react';
class SearchBar extends Component {
  state = {
    term: ''
  };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Video Search</label>
          <input
            type="text"
            className="field"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
