import React from 'react'
import Footer from '../Footer';
import NavBar from '../NavBar/index'
import BioMiddle from './BioMiddle';



function Bio() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div style={{
        marginTop: "80px",
      }}>
        <NavBar toggle={toggle} />
      </div >
      <BioMiddle />


      <Footer />

    </div>

  )
}

export default Bio
