import React, { Component } from "react";
import ExpenseItems from "./ExpenseItem";

export default class ExpenseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        cost: this.cost.value,
        key: Date.now(),
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
    }
    this._inputElement.value = "";
    this.cost.value = "";
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });
    this.setState({ items: filteredItems });
  }
  render() {
    return (
      <div className="expenseListMain">
        Expense Tracker
        <div className="header">
          Expense Entry
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="enter expense"
              required="required"
            ></input>
            <input
              type="number"
              ref={(b) => (this.cost = b)}
              placeholder="enter expense amount"
              required="required"
            ></input>
            <button type="submit">Add</button>
          </form>
        </div>
        Expenses
        <ExpenseItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}
