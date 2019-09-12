import React, { Component } from 'react';
import * as api from '../api';
import BlockNav from './BlockNav';
import ViewToggler from './ViewToggler';
import Addstudent from './AddStudent';

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

  insertStudent = (name, cohort) => {
    api.PostNewStudent(name, cohort).then(student => {
      this.setState(currentState => {
        return { students: [student, ...currentState.students] };
      });
    });
  };

  render() {
    const { students } = this.state;
    const { type } = this.props;
    return (
      <div>
        <ViewToggler insertStudent={this.insertStudent}>
          <Addstudent insertStudent={this.insertStudent} />
        </ViewToggler>
        {type === 'current' ? <BlockNav /> : ''}
        <p>{students.length}</p>
        <table>
          <tbody>
            <tr key="columnTitles">
              <th>Name:</th>
              <th>Starting Cohort:</th>
              <th>Current Block:</th>
            </tr>
            {students.map(student => {
              return (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.startingCohort}</td>
                  <td>{student.currentBlock}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
