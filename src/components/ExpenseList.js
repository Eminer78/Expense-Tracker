import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <ul className="list-group">
      {props.expenses.map((expense) => (
        <ExpenseItem name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
