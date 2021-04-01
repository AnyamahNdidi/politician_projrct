import React from 'react'
import "./EducationStyle.css"

function MidData(props) {
  return (
    <div style={{ backgroundImage: `url(${props.pic})`, height: props.height, width: props.height, }}>
      <div style={{
        background: props.BG,
        height: props.height,
        width: props.height,
        paddingTop: props.paddingtop,
        color: props.color,
        display: props.display,
        justifyContent: props.justifycontent,
        flexDirection: props.flexdriction,
        "&:hover": props.cusor
      }}>
        <div style={{ display: props.display, justifyContent: props.justifycontent, }}>
          <img src={props.iconpix} height="70px" />
        </div>

        <div>
          <p style={{ display: props.display, justifyContent: props.justifycontent, }}>{props.pra}</p>
        </div>
        <div style={{
          display: props.display,
          justifyContent: props.justifycontent,
          paddingLeft: props.paddintright,
          lineHeight: props.lineheight
        }}>
          <p>{props.pra2}</p>
        </div>

      </div>

    </div >
  )
}

export default MidData
