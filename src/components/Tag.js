import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagStyles = styled.div`
  margin: none;
  position: relative;
  max-width: 80px;
  min-width: 10px;
  height: 30px;
  background: lightgrey;
  border-radius: 5%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const TagTextStyles = styled.p`
    margin: 0;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translate(-50%, -50%) }
    `;
const Tag = props => {
  return (
    <TagStyles>
      <TagTextStyles>{props.tag}</TagTextStyles>
    </TagStyles>
  );
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired
};

export default Tag;
