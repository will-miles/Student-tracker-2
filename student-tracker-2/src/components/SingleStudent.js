import React, { Component } from 'react';
import * as api from '../api';

class SingleStudent extends Component {
  state = {
    student: {}
  };

  componentDidMount() {
    this.fetchSingleStudent();
  }

  componentDidUpdate(prevProps) {
    if (this.props.student_id !== prevProps.student_id) {
      this.fetchSingleStudent();
    }
  }

  render() {
    const { student } = this.state;
    return (
      <div className="student">
        <h1>{student.name}</h1>
      </div>
    );
  }
  fetchSingleStudent = () => {
    const { student_id } = this.props;
    api.getSingleStudent(student_id).then(student => {
      this.setState({ student });
    });
  };
}

export default SingleStudent;
