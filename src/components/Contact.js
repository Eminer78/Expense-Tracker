import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="border border-secondary rounded-3 alert-primary ">
          <div className="row mx-4 px-4">
            <h3 className="d-flex justify-content-center align-items-center">
              Contact Info
            </h3>
            <form>
              <div className="col-sm px-4">
                <label></label>
                <label htmlFor="fname" style={{ fontWeight: "bold" }}>
                  First Name:
                </label>
                <input
                  type="text"
                  id="fname"
                  className="form-control py-3"
                  placeholder="first name"
                  required="required"
                ></input>
              </div>
              <div className="col-sm px-4">
                <label
                  htmlFor="lname"
                  className="mt-2 "
                  style={{ fontWeight: "bold" }}
                >
                  Last Name:
                </label>
                <input
                  id="lname"
                  type="text"
                  className="form-control py-3"
                  placeholder="last name"
                  required="required"
                ></input>
              </div>
              <div className="col-sm px-4">
                <label
                  htmlFor="email"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Email:
                </label>
                <input
                  id="email"
                  className="form-control py-3"
                  type="email"
                  placeholder="email"
                  required="required"
                ></input>
              </div>
              <div className="col-sm px-4">
                <label
                  htmlFor="comText"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Comments:
                </label>
                <input
                  id="comText"
                  className="form-control py-3"
                  type="text-area"
                  required="required"
                ></input>
              </div>
              <div className="col-sm px-4">
                <button type="submit" className="btn btn-primary my-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
