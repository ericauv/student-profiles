import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const ExpandButtonStyles = styled.button`
  position: absolute;
  padding-left: 20px;
  top: 0;
  right: 1%;
  width: 4rem;
  cursor: pointer;
  font-size: 4rem;
  color: #aaaaaa;
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
