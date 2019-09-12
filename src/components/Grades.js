import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const GradesStyles = styled.ul`
  padding-top: 20px;
  list-style-type: none;
`;

// Make sure if # of Tests increases > 10, grades are still aligned
const GradeStyles = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
`;

const Grades = props => {
  const { grades, isExpanded } = props;
  return (
    isExpanded && (
      <GradesStyles>
        {grades.map((grade, index) => {
          return (
            <GradeStyles key={index}>
              <span>Test {index}:</span>
              <span>{grade}%</span>
            </GradeStyles>
          );
        })}
      </GradesStyles>
    )
  );
};

Grades.propTypes = {
  grades: PropTypes.arrayOf(PropTypes.string.isRequired),
  isExpanded: PropTypes.bool
};

export default Grades;
