import React from 'react';
import '../../App.css';
import Cards from '../Cards/Cards';
// import Cards from '../Cards';
import HeroSection from '../HeroSection/HeroSection';
// import Footer from '../Footer';
import Ai from '../Ai/Ai';

function Home() {
  return (
    <>
      <HeroSection />
      <Ai></Ai>
      <Cards />
    </>
  );
}

export default Home;