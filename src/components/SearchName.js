import React from 'react';
import { StudentsContext } from '../contexts/students-context';
import SearchBar from './styles/SearchBarStyles';
const SearchName = () => {
  const handleChange = (updateNameFilter, { currentTarget: { value } }) => {
    updateNameFilter(value);
  };
  return (
    <StudentsContext.Consumer>
      {({ updateNameFilter, nameFilter }) => (
        <SearchBar
          autoComplete="on"
          placeholder="Search by name"
          value={nameFilter}
          type="text"
          onChange={e => handleChange(updateNameFilter, e)}
        ></SearchBar>
      )}
    </StudentsContext.Consumer>
  );
};

export default SearchName;
