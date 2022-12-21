import React from "react";
import { Button, Container, Navbar, Dropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">Blogern</Navbar.Brand>
        <div className="d-flex align-items-center">
          <Button variant="primary" className="me-3">
            Post a Blog
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Samir Hossain
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
