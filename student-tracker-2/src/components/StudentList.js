import React, { Component } from 'react';
import * as api from '../api';
import BlockNav from './BlockNav';

class StudentList extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.getstudents();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.getstudents();
    }
  }

  getstudents = () => {
    if (!this.props.type) {
      api.fetchStudents().then(students => {
        this.setState({ students });
      });
    } else {
      api.fetchStudentsByType(this.props.type).then(students => {
        this.setState({ students });
      });
    }
  };

  render() {
    const { students } = this.state;
    const { type } = this.props;
    return (
      <div>
        {type === 'current' ? <BlockNav /> : ''}
        <p>{students.length}</p>
        <table>
          <tr>
            <th>Name:</th>
            <th>Starting Cohort:</th>
            <th>Current Block:</th>
          </tr>
          {students.map(student => {
            return (
              <tr>
                <td>{student.name}</td>
                <td>{student.startingCohort}</td>
                <td> {student.currentBlock}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default StudentList;
