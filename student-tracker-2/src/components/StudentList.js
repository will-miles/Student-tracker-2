import React, { Component } from 'react';
import * as api from '../api';
import BlockNav from './BlockNav';
import ViewToggler from './ViewToggler';
import SingleStudent from './SingleStudent';
import { Router, Link } from '@reach/router';

class StudentList extends Component {
  state = {
    students: [],
    selectedStudentId: ''
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
    const { type, block } = this.props;
    let typeBool = true;
    if (type === 'current') typeBool = false;
    if (!type) typeBool = '';
    const params = {
      graduated: typeBool,
      block_slug: block
    };
    console.log(params);
    api.fetchStudents(params).then(students => {
      this.setState({ students });
    });
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
      <div className="list">
        <div>
          <ViewToggler insertStudent={this.insertStudent} />
          {type === 'current' ? <BlockNav /> : ''}
          <p>{students.length}</p>
          <div className="studentList">
            <table>
              <tbody>
                <tr key="columnTitles">
                  <th>Name:</th>
                  <th>Starting Cohort:</th>
                  <th>Current Block:</th>
                </tr>
                {students.map(student => {
                  const { _id } = student;
                  return (
                    <tr key={student._id}>
                      <td>
                        <Link to={_id}> {student.name}</Link>
                      </td>
                      <td>{student.startingCohort}</td>
                      <td>{student.currentBlock}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Router>
          <SingleStudent path=":student_id" />
        </Router>
      </div>
    );
  }
}

export default StudentList;
