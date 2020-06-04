import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

import ukFlag from "./img/uk_flag_42x28.png";

const NavbarLinks = () => {
  return (
    <Nav navbar className="navbar-nav ml-auto">
      <NavItem className="nav-item">
        <NavLink className="nav-link" href="#about">
          Despre noi
        </NavLink>
      </NavItem>
      <NavItem className="nav-item">
        <NavLink className="nav-link" href="#jobs">
          Joburi
        </NavLink>
      </NavItem>
      <NavItem className="nav-item">
        <NavLink className="nav-link" href="#journey">
          Etape aplicatie
        </NavLink>
      </NavItem>
      <NavItem className="nav-item">
        <NavLink className="nav-link" href="#apply">
          Aplica
        </NavLink>
      </NavItem>
      <NavItem className="nav-item">
        <NavLink className="nav-link" href="#contact">
          Contact
        </NavLink>
      </NavItem>
      <NavItem className="nav-item p-0">
        <NavLink className="nav-link flag" href="#contact">
          <img
            src={ukFlag}
            width="42"
            height="28"
            alt="United Kingdom`s flag"
          />{" "}
          EN
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavbarLinks;
