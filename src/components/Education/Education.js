import React from 'react'
import Footer from '../Footer';
import NavBar from '../NavBar/index'
import MidEdu from './MidEdu';




function Education() {
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

      <MidEdu />

      <Footer />
    </div>
  )
}

export default Education
