import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" style={{ backgroundColor: "#A3A8AA" }}>
        <Container>
        {/* didn't add LinkContainer */}
          <Navbar.Brand href="/" className="me-auto">
            Wedding Planner
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"> {/* Use 'ms-auto' class here */}
              <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
              
              <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
