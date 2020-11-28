import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Coursename from "./Coursename";

function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              Video Tutorials
            </Link>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* <li>
                <Link to="/coursename">coursename</Link>
              </li> */}
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/:coursename" children={<Coursename />} /> */}
          <Route path="/:coursename">
            <Coursename />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;
