import React from 'react';
import { Link } from '@reach/router';

const BlockNav = () => {
  return (
    <nav>
      <Link to="/current">All</Link> |{' '}
      <Link to="/current/fun">Fundimentals</Link> |{' '}
      <Link to="/current/be">Back End</Link> |{' '}
      <Link to="/current/fe">Front End</Link> |{' '}
      <Link to="/current/proj">Project</Link>
    </nav>
  );
};

export default BlockNav;
