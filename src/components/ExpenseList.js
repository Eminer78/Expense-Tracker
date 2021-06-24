import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 1, name: "Shopping", cost: 50 },
    { id: 2, name: "Vacation", cost: 500 },
    { id: 3, name: "Gas", cost: 90 },
    { id: 4, name: "Mortgage", cost: 1600 },
    { id: 5, name: "Utilities", cost: 200 },
    { id: 6, name: "Cable/Internet", cost: 180 },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
