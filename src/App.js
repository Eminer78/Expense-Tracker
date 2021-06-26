import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { name: "Shopping", cost: 50 },
        { name: "Utilities", cost: 150 },
      ],
    };
    this.addExpense = this.addExpense.bind(this);
    this.deleteExpense = this.deleteExpense.bind(this);
  }

  addExpense(name, cost) {
    const newExpense = { name: name, cost: cost };
    const newExpenses = [...this.state.expenses, newExpense];
    this.setState({
      expenses: newExpenses,
    });
  }

  deleteExpense(expenseId) {
    // ...
  }

  render() {
    return (
      <div className="container">
        <h1 className="mt-3">Expense Tracker</h1>
        <h3 className="mt-3">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm addExpense={this.addExpense} />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList
              expenses={this.state.expenses}
              deleteExpense={this.deleteExpense}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
