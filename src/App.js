import React from "react";
import ExpenseList from "./components/ExpenseList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <ExpenseList />
    </div>
  );
};

export default App;
