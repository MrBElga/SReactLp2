import React from 'react';
import {  Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './estilo.css';

import logo from "./Image/Logo/Logo3.png"

export default function Menu(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-style">
      
      <Navbar.Brand href="/" className="navbar-brand">
        <img
          src={logo}
          alt="Logo"
          height="60" 
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown
            title="MENU"
            id="basic-nav-dropdown"
            className="nav-dropdown dropdown-right" 
          >
            <NavDropdown.Item as={Link} to="/conta" className="nav-link">
              CONTA
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/loja" className="nav-link">
              LOJA
            </NavDropdown.Item>
            <NavDropdown.Divider className="nav-divider" />
            <NavDropdown.Item as={Link} to="/forum" className="nav-link">
              FORUM
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
}
