import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grades from './Grades';
import ExpandButton from './ExpandButton';
import Tags from './Tags';

const NameStyles = styled.h1`
  text-transform: uppercase;
`;
const StudentStyles = styled.div`
  border-bottom: 1px solid black;
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: minmax(80px, 200px) minmax(100px, 2fr) minmax(
      20px,
      0.5fr
    );
`;

const ProfilePicStyles = styled.img`
  width: 100%;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 50px;
`;

const DetailsStyles = styled.ul`
  list-style-type: none;
`;

class Student extends Component {
  state = {
    isExpanded: true
  };
  toggleExpand = () => {
    const isExpanded = !this.state.isExpanded;
    this.setState({ isExpanded });
  };

  calculateAverage = grades => {
    const total = grades.reduce(
      (total, currentGrade) => total + parseFloat(currentGrade),
      0
    );
    return total / grades.length;
  };

  render() {
    const { student } = this.props;
    const {
      city,
      company,
      email,
      firstName,
      grades,
      id,
      lastName,
      pic,
      skill,
      tags
    } = student;
    const { updateStudent } = this.props;

    const { isExpanded } = this.state;
    const average = this.calculateAverage(grades);

    return (
      <StudentStyles>
        <ProfilePicStyles src={pic} alt="profile"></ProfilePicStyles>
        <div>
          <NameStyles>
            {firstName} {lastName}
          </NameStyles>
          <DetailsStyles>
            <li>Email: {email}</li>
            <li>Company: {company}</li>
            <li>Skill: {skill}</li>
            <li>Average: {average}%</li>
          </DetailsStyles>
          {isExpanded && (
            <>
              <Grades isExpanded={isExpanded} grades={grades}></Grades>
              <Tags student={student} updateStudent={updateStudent} />
            </>
          )}
        </div>
        <ExpandButton
          isExpanded={isExpanded}
          toggleExpand={this.toggleExpand}
        ></ExpandButton>
      </StudentStyles>
    );
  }
}

Student.propTypes = {
  student: PropTypes.shape({
    city: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string.isRequired,
    grades: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    pic: PropTypes.string,
    skill: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }),
  updateStudent: PropTypes.func.isRequired
};

export default Student;
