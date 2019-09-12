import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBar = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;
const Search = props => {
  const handleChange = ({ currentTarget: { value } }) => {
    props.updateFilter(value);
  };
  return (
    <SearchBar
      placeholder="Search by name or tag"
      value={props.filter}
      type="text"
      onChange={handleChange}
    ></SearchBar>
  );
};

Search.propTypes = {
  updateFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

export default Search;
