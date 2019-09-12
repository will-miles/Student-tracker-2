import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/students/current">Current Students</Link> |{' '}
        <Link to="/students/graduated">Graduated Students</Link>
      </nav>
    </div>
  );
};

export default Nav;
