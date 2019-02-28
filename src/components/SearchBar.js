import React, { Component } from 'react';
class SearchBar extends Component {
  state = {
    term: ''
  };
  onInputChange = e => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    // console.log('state', this.state);
    //TODO: Make sure we call callback from parent component
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
