import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-dish.png'
import { Navbar, Container, Offcanvas } from 'react-bootstrap';
import Filter from '../Filter/Filter';

export default function Header() {
  return (
    <Navbar bg='warning' expand={false}>
      <Container>
        <Link to='/'>
          <img src={logo} alt=''/>
        </Link>
        <Navbar.Toggle aria-controls='offcanvasNavbar' />
        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel'>
              Search Recipes Here
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Filter />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
