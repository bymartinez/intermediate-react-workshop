import React from 'react';
import logo from './logo.svg';
import './App.css';

const Home = () => {
  return (
    <div>
      <h1>I'm the home</h1>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h2>I'm the about page</h2>
    </div>
  );
};

const App = () => {
  return <Home />;
}

export default App;
