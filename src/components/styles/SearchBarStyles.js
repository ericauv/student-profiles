import styled from 'styled-components';
const SearchBar = styled.input`
  color: grey;
  background: white;
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 10px;
  margin-bottom: 10px;
  outline: none;
  font-size: 1.5em;
  &:focus {
    color: black;
    border-bottom: 1.5px solid black;
  }
`;

export default SearchBar;
