import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

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
import { loggedOutAdmin } from '../actions'



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const [dropDownOpenAdmin, setDropDownOpenAdmin] = useState(false);
  
  const auth = useSelector(state => state.auth)
  const admin = useSelector(state => state.admin)

  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(loggedOut())
  }

  const toggle = () => setIsOpen(!isOpen);
  const toggleButton = () => setDropDownOpen(!dropDownOpen);


  const toggleButtonAdmin = () => setDropDownOpenAdmin(!dropDownOpenAdmin);


  const renderLoginOrLgout = () => {
    if(auth.isAuth) return(
      <ButtonDropdown isOpen={dropDownOpen} toggle={toggleButton}>
        <DropdownToggle caret color="primary" size="sm" className="mr-5">
          <i className="fas fa-grin" /> Welcome {auth.profile.nom}
        </DropdownToggle>
        <DropdownMenu size="sm">
          <NavLink href="/profil">
            <DropdownItem className="DropdownItem">
              <i className="fas fa-user" /> Profil
            </DropdownItem>
          </NavLink>
          <NavLink href="/mes-produits">
            <DropdownItem className="DropdownItem">
              <i className="fas fa-cube" /> Mes produits
            </DropdownItem>
          </NavLink>
          <NavLink href="/mes-services">
            <DropdownItem className="DropdownItem">
              <i className="fas fa-paint-roller" /> Mes services
            </DropdownItem>
          </NavLink>
          <hr/>
          <DropdownItem onClick={logOut} className="DropdownItem deconnection">
            <i className="fas fa-sign-out-alt"/> Se deconnecter
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )

    return (
      <NavLink style={{color: '#fff'}} href="/login">
        <i className="fas fa-sign-in-alt" /> Se connecter
      </NavLink>
    )
  }

  const renderAdminLoginOrLgout = () => {
    if(admin.isAuth) return(
      <ButtonDropdown isOpen={dropDownOpenAdmin} toggle={toggleButtonAdmin}>
        <DropdownToggle caret color="danger" size="sm" style={{height: 31, marginTop: 5}}>
          <i className="fas fa-grin" /> Welcome Admin
        </DropdownToggle>
        <DropdownMenu size="sm" className="bg-danger">
        <Link to="/admin-control">
            <DropdownItem className="DropdownItem">
              <i className="fas fa-cog" /> Control
            </DropdownItem>
          </Link>
          <Link to="/admin-moes">
            <DropdownItem className="DropdownItem">
              <i className="fas fa-user" /> Tous les moes
            </DropdownItem>
          </Link>
          <Link to="/admin-produits">
            <DropdownItem className="DropdownItem">
              <i className="fas fa-cube" /> Tous les produits
            </DropdownItem>
          </Link>
          <Link to="/admin-services">
            <DropdownItem className="DropdownItem">
              <i className="fas fa-paint-roller" /> Tous les services
            </DropdownItem>
          </Link>
          <hr/>
          <NavLink href="/" style={{padding: 0}}>
            <DropdownItem style={{padding: 0}} onClick={loggedOutAdmin} className="DropdownItem deconnection">
              <i className="fas fa-sign-out-alt"/> Se deconnecter
            </DropdownItem>
          </NavLink>
        </DropdownMenu>
      </ButtonDropdown>
    )

    return (
      <></>
    )
  }


  return (
    <div className="nav-bar">
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">BTP Tunisia</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" className="navbar-brand">
                <i className="fas fa-home" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/moe" className="navbar-brand">
                <i className="fas fa-users" /> MOES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/produits" className="navbar-brand">
                <i className="fas fa-cube" /> Produits
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services" className="navbar-brand">
                <i className="fas fa-paint-roller" /> Services
              </NavLink>
            </NavItem>
            {renderAdminLoginOrLgout()}
          </Nav>
          {renderLoginOrLgout()}
        </Collapse>
      </Navbar>
    </div>
  );
}

export {NavBar};