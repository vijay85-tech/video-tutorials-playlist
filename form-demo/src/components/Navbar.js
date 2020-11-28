import React from "react";
import Home from "./Home"
import About from "./About"
import { Link, BrowserRouter as Router,Route, Switch } from "react-router-dom";
import App from "../App";
// import Profile from "./Profile";
import MyContextDemo from "./MyContextDemo";
import MyUseContextDemo from "./MyUseContextDemo";
import MyUseReducer from "./MyUseReducer";
import GlobalSateMgmt from "./GlobalStateMgmt";
import DarkWhiteTheme  from "./DarkWhiteTheme";
const Navbar = () => {
  return (
    <Router>
      <nav>
        <div className="nav-wrapper">
          <Link to="" className="brand-logo">
            Logo
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Register</Link>
            </li>
           
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/mycontext">ContextAPI</Link>
            </li>
            <li>
              <Link to="/myusecontext">useContextAPI</Link>
            </li>
            <li>
              <Link to="/myusereducer">useReducerAPI</Link>
            </li>
           
            <li>
              <Link to="/globalsatemgmt">Global Data Hooks API</Link>
            </li>
            <li>
              <Link to="/theme">Theme Color</Link>
            </li>
           
          </ul>
        </div>
      </nav>
      <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route  path="/:profile_id" component={Profile} /> */}
          <Route  path="/add" component={App} />
          <Route  path="/About" component={About} />
          <Route  path="/mycontext" component={MyContextDemo} />
          <Route  path="/myusecontext" component={MyUseContextDemo} />
          <Route  path="/myusereducer" component={MyUseReducer} />
          <Route  path="/globalsatemgmt" component={GlobalSateMgmt} />
          <Route  path="/theme" component={DarkWhiteTheme} />


      </Switch>
    </Router>
  );
};
export default Navbar;
