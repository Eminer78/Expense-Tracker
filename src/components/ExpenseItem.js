import React from "react";

const ExpenseItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge alert-success mt-2">${props.cost}</span>
        <button type="submit" className="btn btn-secondary">
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
