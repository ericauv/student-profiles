import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const ExpandButtonStyles = styled.button`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  font-size: 1.7rem;
  color: grey;
  background: none;
  border: none;
  outline: none;

  &:hover {
    color: black;
  }
`;

const ExpandButton = props => {
  const { isExpanded, toggleExpand } = props;
  return (
    <ExpandButtonStyles onClick={toggleExpand}>
      {isExpanded ? '-' : '+'}
    </ExpandButtonStyles>
  );
};

ExpandButton.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  toggleExpand: PropTypes.func
};

export default ExpandButton;
