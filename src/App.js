import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
// import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Layout>
  </BrowserRouter>
);

export default App;
