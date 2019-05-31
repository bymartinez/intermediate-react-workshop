import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
// import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Layout";
// context
import ThemeProvider from './components/ThemeProvider';

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
