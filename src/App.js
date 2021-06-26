import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">My Budget Planner</h1>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
};

export default App;
