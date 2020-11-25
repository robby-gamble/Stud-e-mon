import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar
      style={{
        fontFamily: "Raleway",
      }}
      variant="light"
      bg="light"
      expand="lg"
      sticky="top"
    >
      <Navbar.Brand
        style={{
          fontSize: "1.325rem",
          webkitTextStrokeWidth: 0.2,
          webkitTextStrokeColor: "grey",
          marginRight: 0,
          paddingRight: 10,
        }}
        href="/Home"
      >
      
        <h7 style={{ color: "black" }}>STUD-E-MON</h7>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <NavDropdown title="Resources" id="basic-nav-dropdown">
            
            
            <NavDropdown.Item href="/resources/FAQ">FAQs</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <NavDropdown
            title={
              "Logged in as: " +
              localStorage.getItem("firstName") +
              " " +
              localStorage.getItem("lastName")
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              onClick={() => {
                localStorage.clear();
              }}
              href="/signin"
            >
              {" "}
              <Nav.Link href="/Home">Log Out</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
