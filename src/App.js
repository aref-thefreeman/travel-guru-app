
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch'
import Book from './Components/Book/Book'
import LogIn from './Components/LogIn/LogIn';

function App() {


  return (
    <div className = "app-bg">

      {/* //UserContext will be setup here */}
      <Router>
        <Header></Header>
        <Switch>
        <Route path exact = "/">
              <Home></Home>
          </Route>

          <Route path = "/home">
              <Home></Home>
          </Route>

          <Route path exact = "/">
              <Home></Home>
          </Route>

          <Route path = "/about">
            <About></About>
          </Route>

          <Route path = "/SignUp">
            <SignUp></SignUp>
          </Route>

          <Route path = "/logIn">
            <LogIn></LogIn>
          </Route>

          <Route path= "/book">
            <Book></Book>
          </Route>

          <Route path = "*">
            <NoMatch></NoMatch>
          </Route>

          


          {/* //Private Routing will set up here
           */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
