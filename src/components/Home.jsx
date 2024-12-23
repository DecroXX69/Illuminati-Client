import React from "react";
import Navbar from './Navbar';
import HeroContainer from "./HeroContainer";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Menu from "./Menu";
import Maps from "./Maps";
import Footer from "./Footer";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroContainer />
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="menu"><Menu /></div>
      <div id="gallery"><Gallery /></div>
      <div id="maps"><Maps /></div>
      <Footer />
    </div>
  );
};

export default Home;