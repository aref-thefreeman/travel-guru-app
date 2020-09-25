
import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import LogIn from './Components/Header/LogIn/LogIn';
import About from './Components/Header/About/About'
function App() {


  return (
    <div>
      <Router>
        <Header></Header>
        <switch>
          <Route path = "/about">
            <About></About>
          </Route>

          <Route path = "/login">
            <LogIn></LogIn>
          </Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
