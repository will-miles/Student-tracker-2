import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/students">Home</Link> |{' '}
      <Link to="/status/current/students">Current Students</Link> |{' '}
      <Link to="/status/graduated/students">Graduated Students</Link>
    </nav>
  );
};

export default Nav;
