import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Home from "../components/pages/Home";
import AddNew from "../components/pages/AddNew";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function Navbar() {
  return (
    <Router>
      <div>
        <nav>
          <div class="nav-wrapper">
            <ul class="left hide-on-med-and-down">
              <li>
                <Link to="/add">Add New</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add">
            <AddNew />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
