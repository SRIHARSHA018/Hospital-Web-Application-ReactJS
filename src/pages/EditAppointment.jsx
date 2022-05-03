import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { appDetailsData } from "./data.js";
import Button from "../components/Button";

import "../App.css";

class EditAppointment extends Component {
  constructor(props) {
    super(props);
    const appointment =
      appDetailsData.getAppointmentDetails(props.match.params.appId) ||
      undefined;
    this.state = {
      name: appointment.name || "",
      disease: appointment.disease || "",
      appdate: appointment.appdate || "",
      slot: appointment.slot || "",
      description: appointment.description || "",
      appointment: appointment,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleSubmit(e) {
    console.log(
      "Details",
      this.state.appointment.appId,
      this.state.name,
      this.state.disease,
      this.state.appdate,
      this.state.slot,
      this.state.description
    );
    if (true) {
      e.preventDefault();

      appDetailsData.edit(
        this.state.appointment.appId,
        this.state.name,
        this.state.disease,
        this.state.appdate,
        this.state.slot,
        this.state.description
      );
      this.props.history.push("/allAppointments");
    }
  }

  canBeSubmitted() {
    const { name, disease, appdate, slot, description } = this.state;
    return (
      name.length > 0 &&
      disease.length > 0 &&
      appdate.length > 0 &&
      slot.length > 0 &&
      description.length > 0
    );
  }
  handleCancel(e) {
    this.props.history.push("/allAppointments");
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { appointment } = this.state;

    if (!appointment) {
      return <h1>No appointments Found</h1>;
    }
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
            Edit Appointment
          </p>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*it should have fields like name, disease, appdate, slot, description, submit and cancel buttons */}
            <div>
              <label className="FormField__Label">Name</label>
              <input
                id="name"
                className="FormField__Input"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="FormField__Label">Disease</label>
              <input
                id="disease"
                className="FormField__Input"
                name="disease"
                type="text"
                value={this.state.disease}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="FormField__Label">AppDate</label>
              <input
                id="appdate"
                className="FormField__Input"
                name="appdate"
                type="date"
                value={this.state.appdate}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="FormField__Label">slot</label>
              <input
                id="slot"
                className="FormField__Input"
                name="slot"
                type="text"
                value={this.state.slot}
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="FormField__Label">description</label>
              <input
                id="description"
                className="FormField__Input"
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleChange}
              ></input>
            </div>

            <div>
              <Button type="submit">Submit</Button>
            </div>
            <div>
              <Button onClick={this.handleCancel}>Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditAppointment;
