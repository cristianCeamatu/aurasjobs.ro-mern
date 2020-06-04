import React from 'react';
import Layout from './layout';
import Header from './sections/Header';
import About from './sections/About';
import Jobs from './sections/Jobs';
import Journey from './sections/Journey';
import Apply from './sections/Apply';
import Partners from './sections/Partners';

const Home = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Jobs />
      <Journey />
      <Apply />
      <Partners />
    </Layout>
  );
};

export default Home;
