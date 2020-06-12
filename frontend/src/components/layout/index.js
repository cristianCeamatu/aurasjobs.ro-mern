import React from 'react';
import { PropTypes } from 'prop-types';

import NavbarSection from './NavbarSection';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarSection />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
