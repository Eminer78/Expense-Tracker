import React from "react";
import ExpenseList from "./components/ExpenseList";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const App = () => (
  <>
    <Router>
      <nav
        className="navbar navbar-expand-md navbar-light border border-rounded mx-4 my-4 pl-5"
        style={{
          fontSize: "1.5em",
          backgroundColor: "lightgrey",
        }}
      >
        <button
          className="navbar-toggler d-lg-none mx-3"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li>
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeClassName="active"
              >
                ExpenseList
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/Contact"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Route exact path="/" component={ExpenseList} />
      <Route path="/contact" component={Contact} />
    </Router>
    <footer className="footer-custom">Copyright 2021 Eric Miner</footer>
  </>
);

export default App;
