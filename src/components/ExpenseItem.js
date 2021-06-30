import React, { Component } from "react";

export default class ExpenseItems extends Component {
  constructor(props) {
    super();

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {item.text}
        <div>
          <span className="label label-danger label-as-badge mx-4 px-4">
            ${item.cost}
          </span>
          <button
            className="btn btn-secondary"
            onClick={() => this.delete(item.key)}
            key={item.key}
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

  render() {
    var expenseEntries = this.props.entries;
    var listItems = expenseEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}
