import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import { adminDetailsData } from "./data.js";
import "../App.css";
import Button from "../components/Button";
import validator from "validator";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      email: "",
      password: "",
      dob: "",
      mobileno: "",
      location: "",
      showErrorDetails: false,
      errorLog: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  logSignUpDetails(details) {
    const errorLog = [];
    var showError = false;
    if (details.uname.length <= 4) {
      errorLog.push("Username should have more than 4 characters.");
    }
    if (!validator.isEmail(details.email)) {
      errorLog.push("Please enter a valid email address");
    }
    if (!validator.isStrongPassword(details.password)) {
      errorLog.push(
        "Password requirements: minimum 8 characters, minmum 1 lower case, minmum 1 upper case and minimum 1 symbol"
      );
    }
    if (!validator.isMobilePhone(details.mobileno, "en-IN")) {
      errorLog.push("Please enter a valid mobile number");
    }
    if (errorLog.length > 0) {
      showError = true;
      this.setState({
        errorLog: errorLog,
        showErrorDetails: showError,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.canBeSubmitted()) {
      adminDetailsData.add(
        this.state.uname,
        this.state.email,
        this.state.password,
        this.state.dob,
        this.state.mobileno,
        this.state.location
      );
      this.setState({ name: e.target.value });
      console.log(this.state);
      this.props.history.push("/sign-in");
    } else {
      this.logSignUpDetails(this.state);
    }
  }

  canBeSubmitted() {
    const { uname, email, password, dob, mobileno, location } = this.state;
    return (
      uname.length > 4 &&
      validator.isEmail(email) &&
      validator.isStrongPassword(password) &&
      dob.length > 4 &&
      validator.isMobilePhone(mobileno, "en-IN")
    );
  }

  render() {
    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Digital Medical Record Database
          </h3>
        </div>
        <div className="FormCenter">
          <div className="FormTitle">
            <NavLink to="/sign-in" className="FormTitle__Link">
              Login
            </NavLink>{" "}
            or
            <NavLink exact to="/" className="FormTitle__Link">
              Register
            </NavLink>
          </div>
          {this.state.showErrorDetails
            ? this.state.errorLog.map((error) => {
                return (
                  <div>
                    <p>{`*${error}`}</p>
                  </div>
                );
              })
            : ""}
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*Write code here to create uname, email, dob, location, mobileno labels and inputs */}
            <div>
              <label className="FormField__Label" htmlFor="uname">
                Username
              </label>
              <input
                className="FormField__Input"
                type="text"
                id="uname"
                name="uname"
                onChange={this.handleChange}
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="FormField__Label" htmlFor="email">
                E-mail ID
              </label>
              <input
                className="FormField__Input"
                type="email"
                id="email"
                name="email"
                onChange={this.handleChange}
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="FormField__Label" htmlFor="password">
                Password
              </label>
              <input
                className="FormField__Input"
                type="password"
                id="password"
                name="password"
                onChange={this.handleChange}
                placeholder="Enter password"
              />
            </div>
            <div>
              <label className="FormField__Label" htmlFor="dob">
                Date Of Birth
              </label>
              <input
                className="FormField__Input"
                type="date"
                id="dob"
                name="dob"
                onChange={this.handleChange}
                placeholder="Enter date in formate of dd/mm/yyyy"
              />
            </div>
            <div>
              <label className="FormField__Label" htmlFor="mobileno">
                Mobile No
              </label>
              <input
                className="FormField__Input"
                type="number"
                id="mobileno"
                name="mobileno"
                onChange={this.handleChange}
                placeholder="Enter Mobile Number"
              />
            </div>
            <div>
              <label className="FormField__Label" htmlFor="location">
                Location
              </label>
              <input
                className="FormField__Input"
                type="text"
                id="location"
                name="location"
                onChange={this.handleChange}
                placeholder="Please enter the location"
              />
            </div>

            <div className="FormField">
              {/* Write code here to create Register Button */}
              <Button className="FormField__Button" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
