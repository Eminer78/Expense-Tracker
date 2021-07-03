import React from "react";
import ExpenseList from "./components/ExpenseList";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div className="mx-4">
      <li className="d-flex justify-content-center align-items-center border border-secondary alert-secondary m-2 mx-3 pt-1 pb-3 rounded">
        <span className="mx-4 px-4" style={{ fontSize: "2em" }}>
          <Link to="/" style={{ color: "black" }}>
            ExpenseList
          </Link>
        </span>
        <span className="mx-4 px-4" style={{ fontSize: "2em" }}>
          <Link to="/Contact" style={{ color: "black" }}>
            Contact
          </Link>
        </span>
      </li>

      <Route exact path="/" component={ExpenseList} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;

/*
const App = () => {
  return (
    <div className="container">
      <ExpenseList />
    </div>
  );
};

export default App;

*/
