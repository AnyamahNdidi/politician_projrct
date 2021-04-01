import React from 'react'
import "./MiddleBio.css"
import pix from "../img/EvS-Ef9Y.jpg"
import pix1 from "../img/advance.jpg"
import Modelvid from '../MiddleContent/Modelvid'
import { Link } from "react-router-dom"
import { alldb } from "../base"
import { Link as Links } from "react-scroll"
import { HashLink as LinkH } from "react-router-hash-link"

const db = alldb.collection("Split_bio")

function BioMiddle() {

  const [data, setData] = React.useState([])

  const getData = async () => {
    await db.onSnapshot((snapshot) => {
      const iteams = [];
      snapshot.forEach((doc) => {
        iteams.push({ ...doc.data(), id: doc.id });
      });
      setData(iteams);
    })

  };
  console.log(data)
  React.useEffect(() => {
    getData();
  }, [])
  return (
    <div className="Main_bio">

      <div className="early_life">
        <div className="img_early">

          <img src={pix} />
          <Link
            style={{ textDecoration: 'none', backgroundColor: 'red', color: "none" }}

            to="/Biolanded">
            <div className="hover_container">
              <p>The Early Life🔰


            </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="advance_life">
        <div className="img_early">
          <img src={pix1} />

          <LinkH smooth to="#Biolanded">
            <Link to="/Biolanded">
              <div className="hover_container">
                <p>Politcal Journey🔰</p>
              </div>
            </Link>
          </LinkH>



        </div>

      </div>
    </div>
  )
}

export default BioMiddle
