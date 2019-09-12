import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddTag from './AddTag';
import Tag from './Tag';

const TagsStyles = styled.ul`
  list-style-type: none;
  margin-top: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(10px, 100px));
`;

const Tags = props => {
  const { updateStudent, student } = props;
  return (
    <div>
      <TagsStyles>
        {student.tags &&
          student.tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)}
      </TagsStyles>
      <AddTag id={student.id} updateStudent={updateStudent}></AddTag>
    </div>
  );
};

Tags.propTypes = {
  updateStudent: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired
};

export default Tags;
