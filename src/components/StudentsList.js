import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
const StudentsList = props => {
  const { updateStudent } = props;
  return (
    <div>
      {props.students.map(student => (
        <Student
          updateStudent={updateStudent}
          key={student.id}
          student={student}
        ></Student>
      ))}
    </div>
  );
};

StudentsList.propTypes = {
  updateStudent: PropTypes.func.isRequired,
  students: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default StudentsList;
