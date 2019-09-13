import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagStyles = styled.div`
  background: gainsboro;
  height: 40px;
  margin-right: 5px;
  margin-bottom: 5px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const TagTextStyles = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
