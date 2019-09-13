import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const GradesStyles = styled.table`
  padding-left: 20px;
  width: 150px;
`;

// Make sure if # of Tests increases > 10, grades are still aligned
const GradeStyles = styled.tr`
  text-align: left;
`;

const SpanStyles = styled.td`
  text-align: left;
`;

const Grades = props => {
  const { grades, isExpanded } = props;
  return (
    isExpanded && (
      <GradesStyles>
        <tbody>
          {grades.map((grade, index) => {
            return (
              <GradeStyles key={index}>
                <SpanStyles>Test {index}:</SpanStyles>
                <SpanStyles>{grade}%</SpanStyles>
              </GradeStyles>
            );
          })}
        </tbody>
      </GradesStyles>
    )
  );
};

Grades.propTypes = {
  grades: PropTypes.arrayOf(PropTypes.string.isRequired),
  isExpanded: PropTypes.bool
};

export default Grades;
