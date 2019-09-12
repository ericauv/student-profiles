import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import StudentsList from './StudentsList';

// TODO:
// Filter students by Name / Tag
// Search
// Autocomplete tag
// Padding tags
// grid-gap tags
// Grade gap too large
class Students extends Component {
  state = { students: [], filter: '' };
  componentDidMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(res => res.json())
      .then(data => {
        const { students } = data;
        this.setState({ students });
      });
  }

  updateStudent = (id, propertyName = 'tags', newValue) => {
    const students = [...this.state.students];
    // Look for student in students array
    const studentIndex = students.findIndex(
      student => parseFloat(student.id) === parseFloat(id)
    );
    if (studentIndex === -1) {
      throw new Error('Could not find student with passed id:' + id);
    }
    let student = students[studentIndex];
    // Update the student's property with the newValue
    if (propertyName === 'tags') {
      student = this.updateTags(student, newValue);
    } else {
      student[propertyName] = newValue;
    }
    console.log('objects equal?', students[studentIndex] === student);

    // Update the students array in state
    this.setState({ students });
  };

  updateTags = (student, newValue) => {
    // API does not return tags property for students
    if (!student.tags) {
      student.tags = [];
    }
    const tags = student.tags;
    student.tags = [...tags, newValue]; // TODO Don't allow duplicate tags for same student
    return student;
  };

  filterStudents = () => {
    const students = [...this.state.students];
    const { filter } = this.state;
    if (!filter) return students;

    return students.filter(student => {
      const tags = student.tags;
      const matchNames =
        student.firstName.toLowerCase().includes(filter) ||
        student.lastName.toLowerCase().includes(filter);
      if (!tags) {
        return matchNames;
      } else {
        return (
          matchNames || tags.some(tag => tag.toLowerCase().includes(filter))
        );
      }
    });
  };
  updateFilter = newFilter => {
    this.setState({ filter: newFilter });
  };
  render() {
    const studentsList = this.filterStudents();
    console.log(studentsList);

    return (
      <div>
        <Search
          filter={this.state.filter}
          updateFilter={this.updateFilter}
        ></Search>
        <StudentsList
          filter={this.state.filter}
          students={this.filterStudents()}
          updateStudent={this.updateStudent}
        ></StudentsList>
      </div>
    );
  }
}

Students.propTypes = {};

export default Students;
