import React from 'react';
import ThemeContext from './ThemeContext';

const Post = ({ title, body }) => {
  return (
    <ThemeContext.Consumer>
      {({ color }) => (
        <div>
          <h2 style={{color}}>{title}</h2>
          <p>{body}</p>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Post;