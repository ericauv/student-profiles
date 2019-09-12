import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TagInputStyles = styled.input`
  margin-left: 40px;
  margin-top: 20px;
  border: none;
  border-bottom: 1.5px solid black;
  padding-top: 10px;
  outline: none;
`;

class AddTag extends Component {
  state = {
    tag: ''
  };

  handleChange = ({ currentTarget: { value } }) => {
    this.setState({ tag: value });
  };
  handleSubmit = e => {
    // stop form from submitting and refreshing page
    e.preventDefault();
    if (this.state.tag) {
      // Only add non-blank text tag
      this.props.updateStudent(this.props.id, 'tags', this.state.tag);
    }
    this.setState({ tag: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} autocomplete="on">
        <TagInputStyles
          autocomplete="on"
          type="text"
          onChange={this.handleChange}
          value={this.state.tag}
          placeholder="Add a tag"
          required
        ></TagInputStyles>
        <input type="submit" style={{ display: 'none' }} />
      </form>
    );
  }
}

AddTag.propTypes = {
  updateStudent: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default AddTag;
