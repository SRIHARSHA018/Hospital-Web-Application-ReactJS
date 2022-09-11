import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { adminDetailsData } from "./data.js";
import "../App.css";
import Button from "../components/Button";
import validator from "validator";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      adminDetails: adminDetailsData.getData(),
      isValidcredentials: false,
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
  logSignInDetails(details) {
    let errorLog = [];
    if (!validator.isEmail(details.email))
      errorLog.push("Please Enter a valid email address.");
    if (!validator.isStrongPassword(details.password))
      errorLog.push("Password is invalid(Not a strong password)");
    if (!this.state.isValidcredentials)
      errorLog.push("incorrect credentials.Please try again");
    if (errorLog.length !== 0) {
      this.setState({ errorLog: errorLog });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const { adminDetails } = this.state;
    this.logSignInDetails(this.state);

    let validCredentials = false;
    if (this.canBeSubmitted()) {
      adminDetails.map((admin) => {
        if (
          this.state.email === admin.email &&
          this.state.password === admin.password
        ) {
          let currentUser = admin.adminId;
          validCredentials = true;
          this.setState({ isValidcredentials: true });
          adminDetailsData.setCurrentUser(currentUser);
          this.props.history.push("/allpatients");
          return;
        }
      });
      if (!validCredentials) {
        this.setState({ isValidcredentials: false });

        this.props.history.push("/sign-in");
      }
    }
  }
  canBeSubmitted() {
    const { email, password } = this.state;
    return validator.isEmail(email) && validator.isStrongPassword(password);
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
          {!this.state.isValidcredentials
            ? this.state.errorLog.map((error) => {
                return (
                  <div>
                    <p>{`*${error}`}</p>
                  </div>
                );
              })
            : ""}
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*Write code here to create labels and fields for username and password */}
            <div>
              <label className="FormField__Label" htmlFor="email">
                E Mail-Address
              </label>
              <input
                className="FormField__Input"
                type="email"
                id="email"
                name="email"
                onChange={this.handleChange}
                placeholder="Enter your email"
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
                placeholder="Enter your password"
              />
            </div>
            <div className="FormField">
              {/* Write code here to create a login button */}
              <Button className="FormField__Button">Login</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInForm;
