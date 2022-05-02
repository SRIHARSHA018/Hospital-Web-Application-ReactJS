import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";
import Button from "../components/Button.jsx";

class AddPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      dob: "",
      location: "",
      mobile: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    if (this.canBeSubmitted()) {
      alert("Patient Added successfully");
      patientDetailsData.add(
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );
      this.props.history.push("/allPatients");
    }
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }
  canBeSubmitted() {
    const { name, email, dob, location, mobile } = this.state;
    return (
      name.length > 0 &&
      email.length > 0 &&
      dob.length > 0 &&
      location.length > 0 &&
      mobile.length > 0
    );
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    const name = this.state.name;
    const date = new Date();
    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "30px",
              fontSize: "2em",
            }}
          >
            Adding a Patient
          </p>
        </div>
        {/* Write code here to create fields and input labels for name,email,dob,mobileno and location  */}
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div>
              <label className="FormField__Label">Name</label>
              <input
                className="FormField__Input"
                id="name"
                name="name"
                onChange={this.handleChange.bind(this)}
                placeholder="Enter the Patient Name"
              />
            </div>

            <div>
              <label className="FormField__Label">E-mail ID</label>
              <input
                className="FormField__Input"
                id="email"
                name="email"
                onChange={this.handleChange.bind(this)}
                placeholder="Enter the Email Id"
              />
            </div>

            <div>
              <label className="FormField__Label">Date of Birth</label>
              <input
                className="FormField__Input"
                id="dob"
                name="dob"
                type="date"
                onChange={this.handleChange.bind(this)}
                placeholder="Date Of Birth"
              />
            </div>

            <div>
              <label className="FormField__Label">Location</label>
              <input
                className="FormField__Input"
                id="location"
                name="location"
                onChange={this.handleChange.bind(this)}
                placeholder="Location"
              />
            </div>

            <div>
              <label className="FormField__Label">Mobile No</label>
              <input
                className="FormField__Input"
                id="mobile"
                name="mobile"
                onChange={this.handleChange.bind(this)}
                placeholder="Enter the Mobile Number"
            />
            </div>
            <div className="FormField">
              {/* Write code here to create Register Button */}
              <Button
                className="FormField__Button"
                onClick={this.handleSubmit}
                type="submit"
              >
                Add Patient
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPatient;
