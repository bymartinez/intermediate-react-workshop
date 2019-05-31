import React from 'react';
import {
  Link,
} from 'react-router-dom';
import ThemeContext from './components/ThemeContext';

const Layout = ({ children }) => {
  return (
    <ThemeContext.Consumer>
      {({ color, changeColor }) => (
        <div>
          <h1 style={{ color: color, }}>My Page</h1>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <button onClick={() => changeColor('red')}>Change color</button>
          <hr />
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Layout;
