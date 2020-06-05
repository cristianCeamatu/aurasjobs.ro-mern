import React from 'react';
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

export default Layout;
