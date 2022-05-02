import React, { Component } from "react";
import "../App.css";
import NavBar from "./NavBar.jsx";
import { patientDetailsData } from "./data.js";
import {Route} from "react-router-dom";

class EditPatient extends Component {
  constructor(props) {
    super(props);
      const patient = patientDetailsData.getPatientDetails(props.match.params.id) || undefined;
    this.state = {
      name: patient.name || "",
      email: patient.email || "",
      dob: patient.dob || "",
      location: patient.location || "",
      mobile: patient.mobile || "",
      patient: patient
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
    handleSubmit(e) {
  
    if (this.canBeSubmitted()) {
     
      e.preventDefault();
      
      patientDetailsData.edit(
        this.state.patient.id,
        this.state.name,
        this.state.email,
        this.state.dob,
        this.state.location,
        this.state.mobile
      );
      
      this.props.history.push("/allPatients");
    }
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
  handleCancel(e) {
    
    this.props.history.push("/allPatients");
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    
    this.setState({
      [name]: value
    });
  }
  render() {
    const { patient } = this.state;
    if (!patient) {
      return (<div>Patient doesnot exist</div>)
    }

    
    return (
      <div>
        <NavBar />
        <div>
          <p
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              paddingTop: "10px",
              fontSize: "2em"
            }}
          >
            Edit patient
          </p>
        </div>
        <div className="FormCenter">
          
            <form onSubmit={this.handleSubmit} className="FormFields">
              {/* Write code here to create labels and input fields for edit patient like name,email,dob,location and mobile*/}
                <div>
              <label>Name</label>
              <input id="name" onChange={this.handleChange}></input>
            </div>

            <div>
              <label>E-mail ID</label>
              <input id="email" onChange={this.handleChange}></input>
            </div>

            <div>
              <label>Date of Birth</label>
              <input id="dob" onChange={this.handleChange}></input>
            </div>

            <div>
              <label>Location</label>
              <input id="location" onChange={this.handleChange}></input>
            </div>

            <div>
              <label>Mobile No</label>
              <input id="mobile" onChange={this.handleChange}></input>
            </div>
            <div className="SideRow">
              {/* Write code here to create submit and cancel buttons */}
              <div></div>
              <button type="submit">submit</button>
              <button onClick={this.handleCancel}>cancel</button>
            </div>
             
            </form>
        </div>
      </div>
    );
  }
}

export default EditPatient;