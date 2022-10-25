import React, { useEffect } from 'react';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import About from './About/About';
import Platform from './Platform/Platform';
import Cards from './Cards/Cards';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Platform />
      <Cards />
    </>
  );
}
