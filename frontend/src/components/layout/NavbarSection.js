import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Container } from 'reactstrap';
import { FaBars } from 'react-icons/fa';

import logo from './img/logonew4.png';
import NavbarLinks from './NavbarLinks';
import NavbarLinksContacts from './NavbarLinksContacts';

const NavbarSection = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar color="dark" dark fixed="top" expand="lg" id="mainNav">
        <Container className="container">
          <NavbarBrand href="/" className="mr-auto">
            <a href="/" className="navbar-brand">
              <img src={logo} alt="Aurasjobs Logo" />
            </a>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="navbar-toggler">
            Menu
            <FaBars />
          </NavbarToggler>
          <Collapse isOpen={!collapsed} navbar>
            <NavbarLinks />
            <NavbarLinksContacts />
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarSection;
