import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './estilo.css';

export default function Menu(props) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Menu
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown
                            title="Cadastros"
                            id="basic-nav-dropdown"
                     
                        >
                            <NavDropdown.Item
                                as={Link}
                                to="/cliente"
                             
                            >
                                Clientes
                            </NavDropdown.Item>
                            <NavDropdown.Divider className="custom-dropdown-divider" />
                            <NavDropdown.Item
                                as={Link}
                                to="/fornecedor"
                           
                            >
                                Fornecedores
                            </NavDropdown.Item>
                            <NavDropdown.Divider className="custom-dropdown-divider" />
                            <NavDropdown.Item
                                as={Link}
                                to="/produto"
                               
                            >
                                Produtos
                            </NavDropdown.Item>
                            <NavDropdown.Divider className="custom-dropdown-divider" /> 
                            <NavDropdown.Item
                                as={Link}
                                to="/categoria"
                            
                            >
                                Categorias
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
