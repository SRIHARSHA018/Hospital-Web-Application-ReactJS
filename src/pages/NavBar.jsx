import React, { useState } from "react";
// import Medilogo from "../images/Medi-Logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink as ReactLink } from "react-router-dom";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/*should have a Navbar brand, toggler and the NavItem (logout) should be linked to sign-in page */}
      
      <Navbar color="faded" light>
        <NavbarBrand to="/" className="mr-auto">HSM</NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={!isOpen} navbar>
        <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/addPatient">Add Patients</Link>
            </NavItem>
            <NavItem>
              <Link to="/allPatients">All Patients</Link>
            </NavItem>
            <NavItem>
              <Link to="/bookAppointment">Book Appointment</Link>
            </NavItem>
            <NavItem>
              <Link to="/allAppointments">All Appointments</Link>
            </NavItem>
            <NavItem>
              <Link to="/logout">logout</Link>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    
  );
};
export default Example;
 