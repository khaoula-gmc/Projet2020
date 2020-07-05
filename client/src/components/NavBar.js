import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">BTP Tunisia</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/moe">MOES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/produit">Produits</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/service">Services</NavLink>
            </NavItem>
          </Nav>
          <NavLink style={{color: '#fff'}} href="/login">Login</NavLink>
          
          
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export {NavBar};