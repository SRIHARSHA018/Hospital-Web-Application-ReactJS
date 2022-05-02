import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { appDetailsData } from "./data";
import { patientDetailsData } from "./data";
import Button from "../components/Button";

class BookAppointment extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      disease: "",
      appdate: "",
      slot: "",
      description: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownNameChange = this.handleDropdownNameChange.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleDropdownChange(e) {
    if (e.target.value === "N/A") alert("please select slot other than N/A");
    this.setState({ slot: e.target.value });
  }
  handleDropdownNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    if (this.canBeSubmitted()) {
      e.preventDefault();

      let slot = this.slots.value;
      if (slot === "N/A" || this.state.name === "N/A") {
        alert("Please select slot and name values other than N/A");
      } else {
        alert("Appointment booked successfully");
        appDetailsData.add(
          this.state.name,
          this.state.disease,
          this.state.appdate,
          slot,
          this.state.description
        );
        this.props.history.push("/allAppointments");
      }
    }
  }
  handleCancel(e) {
    this.props.history.push("/allAppointments");
  }

  canBeSubmitted() {
    const { name, disease, appdate, slot, description } = this.state;
    return (
      name.length > 4 &&
      disease.length > 0 &&
      appdate.length > 0 &&
      description.length > 0
    );
  }
  render() {
    const names = patientDetailsData.getName();

    const isEnabled = this.canBeSubmitted();
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
            Booking Appointment
          </p>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              {/*Write code here to create dropdown to list the name of patients, if no patients are avilable then it should be N/A */}
              <label className="FormField__Label">Name</label>
              <select
                id="dropdown"
                className="DropDowns"
                name="name"
                onChange={this.handleDropdownNameChange.bind(this)}
                value={this.state.name}
              >
                {names.length != 0 ? <option value={"N/A"}>N/A</option> : ""}
                {names.length != 0 ? (
                  names.map((name) => {
                    return <option value={name}>{name}</option>;
                  })
                ) : (
                  <option value="N/A">N/A</option>
                )}
              </select>
            </div>

            {/*Write code here to create date and disease labels */}
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">
                Slots
              </label>
              <header>select slots </header>
              <select
                id="dropdown"
                className="DropDowns"
                ref={(input) => (this.slots = input)}
                onChange={this.handleDropdownChange.bind(this)}
              >
                <option value="N/A">N/A</option>
                <option value="10-11 AM">10-11 AM</option>
                <option value="1-2 PM">1-2 PM</option>
                <option value="3-4 PM">3-4 PM</option>
                <option value="6-8 PM">6-8 PM</option>
              </select>
            </div>
            {/* Write code here to create description field,submit and cancel buttons */}
            <div>
              <label className="FormField__Label">Disease</label>
              <input
                id="disease"
                name="disease"
                className="FormField__Input"
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="FormField__Label">Date</label>
              <input
                id="appdate"
                name="appdate"
                className="FormField__Input"
                type="date"
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <label className="FormField__Label">Description</label>
              <input
                id="description"
                name="description"
                className="FormField__Input"
                onChange={this.handleChange}
              ></input>
            </div>
            <div>
              <Button
                className="FormField__Button"
                type="submit"
                disabled={isEnabled ? false : true}
              >
                Submit
              </Button>
            </div>
            <div>
              <Button className="FormField__Button" onClick={this.handleCancel}>
                cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default BookAppointment;
