import React from 'react'
import "./Videostyle.css"
import CancelIcon from '@material-ui/icons/Cancel';



function VideoCom({ show, setShow, title, vid, decs, }) {
  return (
    <>{

      show ? <div
        onClick={() => {
          setShow((prev) => !prev)
        }}
        className="container_model">
        <div className="container2_model">
          <div className="container_tile">
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", width: "1000px" }}>
              {title}
            </div>
            <div>
              <CancelIcon />
            </div>


          </div>
          <div className="video_container">

            <div className="con_vid">
              <video type='video/mp4' controls src={vid} />
            </div>

            <div className="decs_con">
              {decs}
            </div>




          </div>

        </div>
      </div> : null


    }
    </>
  )
}

export default VideoCom
