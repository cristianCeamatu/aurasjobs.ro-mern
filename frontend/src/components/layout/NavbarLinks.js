import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-scroll';

import ukFlag from './img/uk_flag_42x28.png';

const NavbarLinks = ({ toggleNavbar }) => {
  return (
    <Nav className="navbar-nav ml-auto" onClick={toggleNavbar}>
      <NavItem className="nav-item">
        <Link
          activeClass="active"
          to="about"
          spy
          smooth
          offset={-70}
          duration={500}
          className="nav-link"
          href="#about"
          onClick={toggleNavbar}
        >
          Despre
        </Link>
      </NavItem>
      <NavItem className="nav-item nav-item-focus">
        <Link
          activeClass="active"
          to="jobs"
          spy
          smooth
          offset={-70}
          duration={500}
          className="nav-link"
          href="#about"
          onClick={toggleNavbar}
        >
          Joburi
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link
          activeClass="active"
          to="journey"
          spy
          smooth
          offset={-70}
          duration={500}
          className="nav-link"
          href="#journey"
          onClick={toggleNavbar}
        >
          Etape
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link
          activeClass="active"
          to="apply"
          spy
          smooth
          offset={-70}
          duration={500}
          className="nav-link"
          href="#apply"
          onClick={toggleNavbar}
        >
          Aplica
        </Link>
      </NavItem>
      <NavItem className="nav-item">
        <Link
          activeClass="active"
          to="contact"
          spy
          smooth
          offset={-70}
          duration={500}
          className="nav-link"
          href="#contact"
          onClick={toggleNavbar}
        >
          Contact
        </Link>
      </NavItem>
      <NavItem className="nav-item p-0">
        <NavLink
          className="nav-link flag pb-2"
          href="#contact"
          onClick={toggleNavbar}
        >
          <img
            src={ukFlag}
            width="36"
            height="22"
            alt="United Kingdom`s flag"
          />{' '}
          EN
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavbarLinks;
