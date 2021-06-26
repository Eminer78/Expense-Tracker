import React, { Component } from "react";

export default class AddExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", cost: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    const { name, cost } = this.state;
    event.preventDefault();
    alert(`Expense: ${name} at $${cost}`);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row ">
          <div className="col-sm">
            <label>Name</label>
            <input
              required="required"
              type="text"
              className="form-control py-3"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="col-sm ">
            <label htmlFor="cost">Cost</label>
            <input
              required="required"
              type="text"
              className="form-control py-3"
              name="cost"
              value={this.state.cost}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="col-sm">
            <button type="submit" className="btn btn-primary mt-4">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}
