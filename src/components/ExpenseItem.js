import React, { Component } from "react";

export default class ExpenseItems extends Component {
  constructor(props) {
    super();

    this.createExpenses = this.createExpenses.bind(this);
  }

  createExpenses(item) {
    return (
      <div>
        <li className="list-group-item d-flex justify-content-left align-items-center ">
          <span className="expense-item">{item.text}</span>
          <span className="expense-item">Date: {item.dDate} </span>
          <span className="expense-item">${item.cost}</span>

          <button className="btn alert-warning mx-4 ">Paid</button>
          <button
            className="btn alert-success"
            onClick={() => this.delete(item.key)}
            key={item.key}
          >
            Delete
          </button>
        </li>
      </div>
    );
  }
  delete(key) {
    this.props.delete(key);
  }

  render() {
    var expenseEntries = this.props.entries;
    var listItems = expenseEntries.map(this.createExpenses);
    return <ul className="theList">{listItems}</ul>;
  }
}
