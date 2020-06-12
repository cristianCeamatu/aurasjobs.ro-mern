import React from 'react';
import Layout from './layout';
import Header from './sections/Header';
import About from './sections/About';
import JobsSection from './sections/JobsSection';
import Journey from './sections/Journey';
import Apply from './sections/Apply';
import Partners from './sections/Partners';

const Home = () => {
  return (
    <Layout>
      <Header />
      <About />
      <JobsSection />
      <Journey />
      <Apply />
      <Partners />
    </Layout>
  );
};

export default Home;
