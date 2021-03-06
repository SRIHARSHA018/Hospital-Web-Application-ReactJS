import React, { Component } from "react";
import NavBar from "./NavBar";
import { patientDetailsData } from "./data.js";
import Button from "../components/Button";
class ViewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: patientDetailsData.viewPatientDetails(props.match.params.id),
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allPatients");
  }

  render() {
    console.log(this.state);
    const { patient } = this.state;
    if (!patient) {
      return <h1>No patients found</h1>;
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
              fontSize: "2em",
            }}
          >
            Viewing Patient
          </p>
        </div>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/* Write code here to create fields for name, disease,appdate, slot and mobile*/}
            <div>
              <span className="FormField__Label" id="name" >{patient.name}</span>
            </div>
            <div>
              <span className="FormField__Label" id="email">{patient.email}</span>
            </div>
            <div>
              <span id="dob" className="FormField__Label">{patient.dob}</span>
            </div>
            <div>
              <span id="location" className="FormField__Label">{patient.location}</span>
            </div>
            <div>
              <span id="mobile" className="FormField__Label">{patient.mobile}</span>
            </div>
            <div className="FormField">
              {/*Write code here to create close button */}
              <Button
                className="FormField__Button"
                onClick={this.handleClose.bind(this)}
              >
                Close
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ViewPatient;
