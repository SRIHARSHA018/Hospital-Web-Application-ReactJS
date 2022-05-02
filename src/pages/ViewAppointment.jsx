import React, { Component } from "react";
import NavBar from "./NavBar";
import {appDetailsData} from "./data.js"

class ViewAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
     appointment : appDetailsData.getAppointmentDetails(props.match.params.appId)
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    this.props.history.push("/allAppointments");
  }

  render() {
   const {appointment} = this.state;
   if(!appointment) {
     return <h1>No appointments found</h1>
   }
    return (
      <div>
        <NavBar />
        <div>
          <div>
            <p
              style={{
                textAlign: "center",
                paddingBottom: "10px",
                paddingTop: "30px",
                fontSize: "2em"
              }}
            >
              Viewing Appointment
            </p>
          </div>
        </div>
        <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
            {/* Write code here to display name, appdate, slot, description and disease */}
             <div>
              <span id="name" className="FormField__Label">{appointment.name}</span>
            </div>
            <div>
              <span id="disease" className="FormField__Label">{appointment.disease}</span>
            </div>
            <div>
              <span id="appdate" className="FormField__Label">{appointment.appdate}</span>
            </div>
            <div>
              <span id="slot" className="FormField__Label">{appointment.slot}</span>
            </div>
            <div>
              <span id="description" className="FormField__Label">{appointment.description}</span>
            </div>
            <div className="FormField">
              {/*Write code here to create a close button */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewAppointment;