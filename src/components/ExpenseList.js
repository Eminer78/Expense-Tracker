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
      <div className="container">
        <div className="border border-secondary rounded-3 ">
          <h1
            className="badge-primary rounded-3 m-1 py-4 px-4"
            style={{ fontSize: "2em" }}
          >
            Expense Tracker
          </h1>
        </div>
        <div className="border border-secondary rounded-3 mt-3 ">
          <h3 className="badge-secondary rounded-3 m-1 py-4 px-4">
            Add Expense
          </h3>
          <div className="mt-3">
            <div className="col-sm">
              <div className="row ">
                <form onSubmit={this.addItem}>
                  <div className="col-sm">
                    <label style={{ fontWeight: "bold" }}>Expense</label>
                    <input
                      className="form-control py-3"
                      ref={(a) => (this._inputElement = a)}
                      placeholder="enter expense"
                      required="required"
                    ></input>
                  </div>
                  <div className="col-sm">
                    <label className="mt-2" style={{ fontWeight: "bold" }}>
                      Cost
                    </label>
                    <input
                      className="form-control py-3"
                      type="number"
                      ref={(b) => (this.cost = b)}
                      placeholder="enter expense amount"
                      required="required"
                    ></input>
                  </div>
                  <div className="col-sm">
                    <button type="submit" className="btn btn-success my-4">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-secondary rounded-3 mt-3 ">
          <h3 className="badge-success rounded-3 m-1 py-4 px-4">Expenses </h3>
          <div className="row my-4">
            <div className="col-sm">
              <ul className="list-group mr-4">
                <ExpenseItems
                  entries={this.state.items}
                  delete={this.deleteItem}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
