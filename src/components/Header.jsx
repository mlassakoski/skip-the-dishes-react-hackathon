




import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavItem,
  MenuItem,
  NavDropdown
} from 'react-bootstrap';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>

      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/app">
            logo
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
             <Link to={'/app'}>Products</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
            <Link to={'/orders'}>My Orders</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} href="#">
              <i className="fa fa-user"></i>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
  }
}

export default Header;


