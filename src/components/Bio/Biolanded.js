import React from 'react'
import Footer from '../Footer';
import NavBar from '../NavBar/index'


import pixx from "../img/bio_banner.jpg"
import SecondBio from './SecondBio';



function Biolanded() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [data, setData] = React.useState([])

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
      <SecondBio />
      <Footer />
    </div>
  )
}

export default Biolanded
