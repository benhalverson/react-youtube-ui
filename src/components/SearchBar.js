import React, { useState } from "react";

function SearchBar({ term, onFormSubmit }) {
  const [searchTerm, setSearchTerm] = useState(term || "");

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <label>Video Search</label>
        <input
          type="text"
          className="field"
          value={searchTerm}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
}

export default SearchBar;
