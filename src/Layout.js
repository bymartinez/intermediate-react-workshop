import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <h1>My Page</h1>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <hr />
      {children}
    </div>
  );
};

export default Layout;
