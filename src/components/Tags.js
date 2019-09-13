import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddTag from './AddTag';
import Tag from './Tag';

const TagsStyles = styled.ul`
  list-style-type: none;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  margin-bottom: 0;
`;

const Tags = ({ student }) => {
  return (
    <>
      <TagsStyles>
        {student.tags &&
          student.tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)}
      </TagsStyles>
      <AddTag id={student.id}></AddTag>
    </>
  );
};

Tags.propTypes = {
  student: PropTypes.object.isRequired
};

export default Tags;
