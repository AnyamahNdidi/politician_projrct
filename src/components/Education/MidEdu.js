import React from 'react'
import "./EducationStyle.css"
import pixx from "../img/edu_banner.jpg"
import pix from "../img/pri_ban.jpg"
import MidData from './MidData'
import iconpic from "../img/iconbook.png"

function MidEdu() {
  return (
    <div>

      <div className="mid">
        <div className="mid_banner">
          <img src={pixx} />

        </div>
        <div className="mid_con">
          <div className="mid_c">
            <MidData pic={pix}
              width="260px"
              height="260px"
              BG="#616a0c95"
              pra="Primary Education"
              pary="1995-230-"
              color="white"
              paddingtop="-10px"
              display="flex"
              justifycontent="center"
              flexdriction="column"
              pra2="W.J. David Memorial Baptist School, Lagos Island, Lagos"
              iconpix={iconpic}
              paddintright="30px"
              lineheight="1.1"
              cusor="pointer"

            />

          </div>

        </div>

      </div>

    </div>
  )
}

export default MidEdu
