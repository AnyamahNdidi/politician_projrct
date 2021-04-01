import React from "react";
import ModalButton from "./Body/Body";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { HeroBg } from "./HeroSection/HeroElement";
import MiddleContent from "./MiddleContent/MiddleContent";
import NavBar from "./NavBar/index";
import Pet from "./Peter";
import PetStyle from "./Peter";

import SideBar from "./SideBar/SideBar";
import Slider from "./Slider/Slider";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Slider />
      <MiddleContent />

      <Footer />
    </div>
  );
}

export default Home;

{/* <NavBar toggle={toggle} /> */ }
