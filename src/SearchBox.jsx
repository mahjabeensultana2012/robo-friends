import React from 'react';

const SearchBox = ({ searchfield, handleChange }) => (
  <div className="pa2">
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="search robots"
      onChange={handleChange}
    />
  </div>
);

export default SearchBox;
