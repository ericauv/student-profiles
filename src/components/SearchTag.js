import React from 'react';
import { StudentsContext } from '../contexts/students-context';
import SearchBar from './styles/SearchBarStyles';

const SearchTag = () => {
  const handleChange = (updateTagFilter, { currentTarget: { value } }) => {
    updateTagFilter(value);
  };
  return (
    <StudentsContext.Consumer>
      {({ updateTagFilter, tagFilter }) => (
        <SearchBar
          autoComplete="on"
          placeholder="Search by tag"
          value={tagFilter}
          type="text"
          onChange={e => handleChange(updateTagFilter, e)}
        ></SearchBar>
      )}
    </StudentsContext.Consumer>
  );
};

export default SearchTag;
