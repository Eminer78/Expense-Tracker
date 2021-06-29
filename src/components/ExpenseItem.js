import React, { Component } from "react";

export default class ExpenseItems extends Component {
  constructor(props) {
    super();

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <li>
        {item.text}
        <span>${item.cost}</span>
        <button onClick={() => this.delete(item.key)} key={item.key}>
          Delete
        </button>
      </li>
    );
  }
  delete(key) {
    this.props.delete(key);
  }

  render() {
    var expenseEntries = this.props.entries;
    var listItems = expenseEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}
