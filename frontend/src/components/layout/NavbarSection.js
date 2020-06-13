import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import { FaBars } from 'react-icons/fa';

import logo from './img/logonew4.png';
import NavbarLinks from './NavbarLinks';
import NavbarLinksContacts from './NavbarLinksContacts';

const NavbarSection = () => {
  // Used for reactstrap Navbar
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  // Clicking the brand logo
  function scrollToTop(e) {
    e.preventDefault();
    scroll.scrollToTop();
  }

  // Animate the Navbar
  const [scrolled, setScrolled] = useState(window.scrollY);
  useEffect(() => {
    const logScroll = () => setScrolled(window.scrollY);
    window.addEventListener('scroll', logScroll);
    // Similar to componentWillUnmount
    return () => window.removeEventListener('scroll', logScroll);
  });

  return (
    <Navbar
      fixed="top"
      expand="lg"
      id="mainNav"
      className={scrolled > 200 || !collapsed ? 'navbar-shrink' : 'p-1'}
    >
      <div className="container">
        <NavbarBrand href="/" onClick={scrollToTop} className="p-0">
          <img src={logo} alt="Aurasjobs Brand" />
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="navbar-toggler p-2 mr-2"
        >
          Menu <FaBars />
        </NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <NavbarLinks />
          {/* Hide on large devices, will show in Header on large devices  */}
          <div className="d-block d-lg-none">
            <NavbarLinksContacts />
          </div>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarSection;
