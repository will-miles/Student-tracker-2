import React, { Component } from 'react';

class AddStudent extends Component {
  state = {
    name: '',
    cohort: ""
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="student name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <input
            type="text"
            placeholder="Starting Cohort"
            name="cohort"
            onChange={this.handleChange}
            value={this.state.cohort}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    );
  }
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const insertStudent = this.props.insertStudent;
    const { name, cohort } = this.state;
    insertStudent(name, cohort);
    this.setState({ name: "", cohort: "" })
  };
}

export default AddStudent;
