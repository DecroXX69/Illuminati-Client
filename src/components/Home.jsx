import React from "react";
import Navbar from './Navbar';
import HeroContainer from "./HeroContainer";
import About from "./About";
import Services from "./Services";

import "./Home.css"
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroContainer />
      <About/>
      <Services/>
      

    </div>
  );
};

export default Home;