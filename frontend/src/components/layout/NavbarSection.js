import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
} from 'reactstrap';
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
          <NavbarBrand href="/" className="mr-auto navbar-brand">
            <img src={logo} alt="Aurasjobs Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="navbar-toggler">
            Menu <FaBars className="icon" />
          </NavbarToggler>
          <Collapse isOpen={!collapsed} navbar>
            <NavbarLinks />
            <div className="d-block d-lg-none">
              <NavbarLinksContacts />
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarSection;
