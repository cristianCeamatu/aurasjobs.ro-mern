import React from 'react';
import { Container } from 'reactstrap';
import Typed from 'react-typed';

import NavbarLinksContacts from '../layout/NavbarLinksContacts';

const Header = () => {
  console.log(Typed);
  return (
    <header>
      <Container className="container">
        <div className="intro-text">
          <h1 className="intro-lead-in">Locuri de munca</h1>
          <div className="intro-heading">
            <h3>
              <Typed
                strings={[
                  'Vase de croaziera',
                  'Hoteluri in Cipru',
                  'Hoteluri in Germania',
                  'Agricultura',
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </h3>
          </div>
          {/* <script>
                  var typed = new Typed('#typed', {
                    stringsElement: '#typed-strings',
                    typeSpeed: 40,
                    backSpeed: 55,
                    loop: true,
                  });
                </script> */}
          <a href="#apply" className="page-scroll btn btn-xl">
            Aplica
          </a>
          <a href="#jobs" className="page-scroll btn btn-xl">
            Joburi
          </a>
          <div className="header-contact d-none d-lg-block">
            <NavbarLinksContacts />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
