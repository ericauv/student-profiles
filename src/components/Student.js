import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grades from './Grades';
import ExpandButton from './ExpandButton';
import Tags from './Tags';

const StudentStyles = styled.div`
  border-bottom: 1px solid black;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  grid-gap: 30px;
  position: relative;
`;

const ProfilePicStyles = styled.img`
  margin-top: 10px;
  margin-right: 20px;
  min-height: 120px;
  max-height: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid black;
`;
const NameStyles = styled.h1`
  text-transform: uppercase;
  padding-right: 50px;
`;

const DetailsStyles = styled.div`
  padding-left: 20px;
  p {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
`;

class Student extends Component {
  state = {
    isExpanded: false
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
    const { pic, firstName, lastName, email, company, skill, grades } = student;
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
            <p>Email: {email}</p>
            <p>Company: {company}</p>
            <p>Skill: {skill}</p>
            <p>Average: {average}%</p>
          </DetailsStyles>
          {isExpanded && (
            <>
              <div>
                <Grades isExpanded={isExpanded} grades={grades}></Grades>
              </div>
              <div>
                <Tags student={student} />
              </div>
            </>
          )}
          <ExpandButton
            isExpanded={isExpanded}
            toggleExpand={this.toggleExpand}
          ></ExpandButton>
        </div>
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
  })
};

export default Student;
