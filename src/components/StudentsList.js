import React from 'react';
import styled from 'styled-components';
import Student from './Student';

const StudentsListStyles = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

const StudentsList = ({ students }) => {
  return (
    <StudentsListStyles>
      {students.map(student => (
        <Student key={student.id} student={student} />
      ))}
    </StudentsListStyles>
  );
};

export default StudentsList;
