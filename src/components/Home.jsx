import React from "react";
import Navbar from './Navbar';
import HeroContainer from "./HeroContainer";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Menu from "./Menu";
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroContainer />
      <About/>
      <Services/>
      <Gallery/>
      <Menu/>
    </div>
  );
};

export default Home;