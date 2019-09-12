import React, { Component } from 'react';
import AddStudent from './AddStudent';

class ViewToggler extends Component {
  state = {
    isShowing: false,
    message: { true: 'Add Student', false: 'Hide Form' },
    i: true
  };
  render() {
    const { isShowing, i, message } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>{message[i]}</button>
        {isShowing && <AddStudent />}
      </div>
    );
  }
  handleClick = event => {
    const { isShowing, i } = this.state;
    this.setState({ isShowing: !isShowing, i: !i });
  };
}

export default ViewToggler;
