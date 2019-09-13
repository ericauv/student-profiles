import React, { Component } from 'react';
import SearchName from './SearchName';
import SearchTag from './SearchTag';
import StudentsList from './StudentsList';
import { StudentsContext } from '../contexts/students-context';

class Students extends Component {
  updateTags = (student, newValue) => {
    if (!student.tags) {
      // API does not return tags property for students, need to create it
      student.tags = [];
    }
    const tags = student.tags;
    if (tags.some(tag => tag === newValue)) {
      // don't allow duplicate tags (case-sensitive)
      alert(
        `The tag "${newValue}" already exists for ${student.firstName} ${student.lastName}`
      );
    } else {
      student.tags = [...tags, newValue];
    }
    return student;
  };
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

    // Update the students array in state
    this.setState({ students });
  };
  updateNameFilter = newFilter => {
    this.setState({ nameFilter: newFilter });
  };
  updateTagFilter = newFilter => {
    this.setState({ tagFilter: newFilter });
  };
  filterStudents = () => {
    const students = [...this.state.students];
    const nameFilter = this.state.nameFilter.toLowerCase();
    const tagFilter = this.state.tagFilter.toLowerCase();
    if (!nameFilter && !tagFilter) return students;
    return students.filter(student => {
      const tags = student.tags;
      const matchNames =
        student.firstName.toLowerCase().includes(nameFilter) ||
        student.lastName.toLowerCase().includes(nameFilter);
      if (tagFilter) {
        if (!tags) return false;
        return (
          matchNames && tags.some(tag => tag.toLowerCase().includes(tagFilter))
        );
      }
      return matchNames;
    });
  };
  state = {
    updateStudent: this.updateStudent,
    updateNameFilter: this.updateNameFilter,
    updateTagFilter: this.updateTagFilter,
    students: [],
    nameFilter: '',
    tagFilter: ''
  };
  componentDidMount() {
    fetch('https://www.hatchways.io/api/assessment/students')
      .then(res => res.json())
      .then(data => {
        const { students } = data;
        this.setState({ students });
      });
  }
  render() {
    const filteredStudents = this.filterStudents();
    return (
      <StudentsContext.Provider value={this.state}>
        <SearchName></SearchName>
        <SearchTag></SearchTag>
        <StudentsList students={filteredStudents}></StudentsList>
      </StudentsContext.Provider>
    );
  }
}

export default Students;
