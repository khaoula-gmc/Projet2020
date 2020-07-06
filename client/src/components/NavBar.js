import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} from 'reactstrap'
import { loggedOut } from '../actions';



const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const auth = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(loggedOut())
  }

  const toggle = () => setIsOpen(!isOpen);

  const toggleButton = () => setDropDownOpen(!dropDownOpen);

  const renderLoginOrLgout = () => {
    if(auth.isAuth) return(
      <ButtonDropdown isOpen={dropDownOpen} toggle={toggleButton}>
        <DropdownToggle caret color="primary" size="sm">Welcome</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={logOut} >Se deconnecter</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )

    return <NavLink style={{color: '#fff'}} href="/login">Se connecter</NavLink>
  }

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
          {renderLoginOrLgout()}
        </Collapse>
      </Navbar>
    </div>
  );
}

export {NavBar};