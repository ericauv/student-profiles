import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StudentsContext } from '../contexts/students-context';

const TagInputStyles = styled.input`
  color: grey;
  font-size: 1.2em;
  margin-left: 20px;
  margin-top: 20px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1.5px solid lightgrey;
  outline: none;
  &:focus {
    color: black;
    border-bottom: 1.5px solid black;
  }
`;

class AddTag extends Component {
  state = {
    tag: ''
  };

  handleChange = ({ currentTarget: { value } }) => {
    this.setState({ tag: value });
  };
  handleSubmit = (updateStudent, e) => {
    // stop form from submitting and refreshing page
    e.preventDefault();
    if (this.state.tag) {
      // Only add non-blank text tag
      updateStudent(this.props.id, 'tags', this.state.tag);
    }
    this.setState({ tag: '' });
  };
  render() {
    return (
      <StudentsContext.Consumer>
        {({ updateStudent }) => (
          <form
            onSubmit={e => this.handleSubmit(updateStudent, e)}
            autoComplete="on"
          >
            <TagInputStyles
              autoComplete="on"
              type="text"
              onChange={this.handleChange}
              value={this.state.tag}
              placeholder="Add a tag"
              required
            ></TagInputStyles>
            <input type="submit" style={{ display: 'none' }} />
          </form>
        )}
      </StudentsContext.Consumer>
    );
  }
}

AddTag.propTypes = {
  id: PropTypes.string.isRequired
};

export default AddTag;
