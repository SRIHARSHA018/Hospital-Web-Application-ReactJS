import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import {adminDetailsData} from "./data.js"
import "../App.css";

import Button from "../components/Button"


class ViewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin : adminDetailsData.getCurrentUser() || {}
    };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(e) {
    e.preventDefault();
    this.props.history.push("/allPatients");
  }

  render() {
    
    const {admin} = this.state; 
    return (
      <div>
        <NavBar />
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Here are your details
          </h3>
        </div>

        <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*Write code to create labels for name,email,dob,mobileno and location */}
               <div>
              <span id="name" className="FormField__ViewLabel">{admin.name}</span>
            </div>

            <div>
              <span id="email" className="FormField__ViewLabel">{admin.email}</span>
            </div>

            <div>
              <span id="dob" className="FormField__ViewLabel">{admin.dob}</span>
            </div>

            <div>
              <span id="mobileno" className="FormField__ViewLabel">{admin.mobileno}</span>
            </div>

            <div>
              <span id="location" className="FormField__ViewLabel">{admin.location}</span>
            </div>
            <div className="FormField">
              {/*Write code here to create a close button */}
              <Button className="FormField__Button"  onClick={this.handleClose}>
                    close
                  </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewProfile;