import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";
import  Button  from "../components/Button";
class AllPatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Write function to get the data of patients with the name as appointmentsList:
      patientsList: patientDetailsData.getData(),
    };
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleView(id) {
    this.props.history.push(`/viewPatient/${id}`);
  }
  handleEdit(id) {
    this.props.history.push(`/editPatient/${id}`);
  }
  handleDelete(e) {
    patientDetailsData.deletePatient(e);
    this.setState({
      patientsList: patientDetailsData.getData(),
    });
  }

  render() {
    const { patientsList } = this.state;

    return (
      <div style={{ height: "100%" }}>
        <NavBar />
        <form style={{ display: "flex", height: "100%", alignItems: "center" }}>
          {patientsList.length === 0 ? (
            <h1 style={{ textAlign: "center", flexGrow: "1" }}>
              No Patients Found
            </h1>
          ) : (
            this.state.patientsList.map((ele) => {
              return (
                <div className="FormCenter">
                <div>
                  <label className="FormField__ViewLabel">{ele.name}</label>
                  <Button className="FormField__Button" onClick={this.handleEdit.bind(this, ele.id)}>
                    Edit
                  </Button>
                  <Button className="FormField__Button"  onClick={this.handleView.bind(this, ele.id)}>
                    View
                  </Button>
                </div>
                </div>
              );
            })
          )}
        </form>
      </div>
    );
  }
}

export default AllPatients;
