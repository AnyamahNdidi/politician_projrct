import React from 'react'
import Footer from '../Footer';
import NavBar from '../NavBar/index'

function Foundation() {
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

      <Footer />
    </div>
  )
}

export default Foundation
