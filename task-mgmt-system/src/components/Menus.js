import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./Aboutus";
import Tasks from "./Tasks";
import TempratureConverter from "./tempratureConverter";
const Menu = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Task Management System
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tasks">
                Task List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tempratureConverter">
                Temprature-Converter
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutus">
          <About />
        </Route>
        <Route path="/tempratureConverter">
          <TempratureConverter />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Menu;
