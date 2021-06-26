import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { name: "Shopping", cost: 50 },
    { name: "Vacation", cost: 500 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
