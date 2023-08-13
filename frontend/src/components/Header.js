import React from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {logout} from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () =>{
    dispatch(logout())
  }


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


              {userInfo ? (
                <NavDropdown title= {userInfo.name} id ='username'>
                <LinkContainer to="/profile" >
                <NavDropdown.Item >
                Profile

                </NavDropdown.Item>

                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>

                </NavDropdown>
              ):<Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>}


              {userInfo && userInfo.isAdmin && (
                <NavDropdown title= 'Admin' id ='adminmenu'>
                <LinkContainer to="/admin/userlist" >
                <NavDropdown.Item >
                Users

                </NavDropdown.Item>

                </LinkContainer>

{/* ORDERS */}
                <LinkContainer to="/admin/orderlist" >
                <NavDropdown.Item >
                Orders

                </NavDropdown.Item>

                </LinkContainer>


                <LinkContainer to="admin/productlist" >
                <NavDropdown.Item >
                Products

                </NavDropdown.Item>

                </LinkContainer>


                </NavDropdown>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
