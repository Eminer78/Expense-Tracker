import React from "react";

const AddExpenseForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <inputs
            required="required"
            type="text"
            className="form-control"
            id="name"
          ></inputs>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <inputs
            required="required"
            type="text"
            className="form-control"
            id="cost"
          ></inputs>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
