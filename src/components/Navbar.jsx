import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import LogoClaro from '../assets/img/claro.svg';

export default function ClaroNavbar() {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" className="px-3">
      <Navbar.Brand href="#home">
        <img
          src={LogoClaro}
          height="30"
          className="d-inline-block align-top"
          alt="Claro logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Servicios" id="services-dropdown">
            <NavDropdown.Item href="#action/3.1">Servicio 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Servicio 2</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Tienda" id="store-dropdown">
            <NavDropdown.Item href="#action/3.1">Tienda 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Tienda 2</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="¿Necesitas ayuda?" id="help-dropdown">
            <NavDropdown.Item href="#action/3.1">Ayuda 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Ayuda 2</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Deportes" id="sports-dropdown">
            <NavDropdown.Item href="#action/3.1">Deporte 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Deporte 2</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Hablando Claro" id="claro-dropdown">
            <NavDropdown.Item href="#action/3.1">Claro 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Claro 2</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-light">
            <i className="fas fa-search"></i>
          </Button>
        </Form>
        <Button variant="danger" className="ms-3">
          <i className="fas fa-user"></i> Mi Claro
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
