import React, { Component } from "react";

export default class ExpenseItems extends Component {
  constructor(props) {
    super();

    this.createExpenses = this.createExpenses.bind(this);
  }

  createExpenses(item) {
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={item.key}
      >
        {item.text}
        <div>
          <span className="mx-4 px-4">Expense/Due Date: {item.dDate} </span>
          <span className="mx-4 px-4">${item.cost}</span>
          <button className="btn alert-warning mx-4 ">Paid</button>
          <button
            className="btn alert-success"
            onClick={() => this.delete(item.key)}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
  delete(key) {
    this.props.delete(key);
  }
  paid(key) {
    this.props.paid(key);
  }

  render() {
    var expenseEntries = this.props.entries;
    var listItems = expenseEntries.map(this.createExpenses);
    return <ul className="theList">{listItems}</ul>;
  }
}
