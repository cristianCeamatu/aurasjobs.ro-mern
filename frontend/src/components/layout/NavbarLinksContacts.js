import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FaPhone, FaFacebook, FaEnvelope, FaGlobe } from "react-icons/fa";

const NavbarLinks = () => {
  return (
    <Nav navbar className="navbar-nav d-block d-md-none ml-auto">
      <NavItem>
        <NavLink
          className="nav-link-contact"
          href="mailto:&#111;&#102;&#102;&#105;&#099;&#101;&#064;&#097;&#117;&#114;&#097;&#115;&#106;&#111;&#098;&#115;&#046;&#114;&#111;"
        >
          <FaEnvelope />{" "}
          &#111;&#102;&#102;&#105;&#099;&#101;&#064;&#097;&#117;&#114;&#097;&#115;&#106;&#111;&#098;&#115;&#046;&#114;&#111;
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className="nav-link-contact"
          href="https://www.facebook.com/aurasjobs.ro"
          target="_blank"
        >
          <FaFacebook /> @aurasjobs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link-contact" href="tel:0040725085231">
          <FaPhone /> 0725 085 231
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link-contact" href="tel:0040730719323">
          <FaPhone /> 0730 719 323
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link-contact" href="tel:0040728683604">
          <FaPhone /> 0728 683 604
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className="nav-link-contact"
          href="https://www.google.com/maps/place/aurasjobs.ro+-+Locuri+de+munca+vase+de+croaziera/@44.1770587,28.6430217,17z/data=!3m1!4b1!4m5!3m4!1s0x40bae51edba75ef3:0xd66d2d2bbae39b8f!8m2!3d44.1770549!4d28.6452104"
          target="_blank"
        >
          <FaGlobe /> Locatie: Stefan cel Mare 56, Constanta
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavbarLinks;
