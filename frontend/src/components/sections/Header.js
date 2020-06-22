import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

import NavbarLinksContacts from '../layout/NavbarLinksContacts';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="intro-text">
          <h1 className="intro-lead-in">Locuri de munca</h1>
          <div className="intro-heading">
            <h3>
              <Typed
                strings={[
                  'Vase de croaziera',
                  'Hoteluri in Cipru',
                  'Hoteluri in Germania',
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </h3>
          </div>
          <Link
            to="apply"
            spy
            smooth
            offset={-70}
            duration={500}
            className="btn btn-xl py-1 px-3"
            href="#apply"
          >
            Aplica
          </Link>
          <Link
            to="jobs"
            spy
            smooth
            offset={-70}
            duration={500}
            className="btn btn-xl btn-danger py-1 px-3"
            href="#jobs"
          >
            Joburi
          </Link>
          <div className="header-contact d-none d-lg-block">
            <NavbarLinksContacts />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
