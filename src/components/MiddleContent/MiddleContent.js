import React from 'react'
import "./MiddleStyle.css"
import pix from "../img/Nigeriahouseofreps.jpg"
import VideoCom from './VideoCom'
import { alldb } from "../base"
import Modelvid from './Modelvid'


const db = alldb.collection("Hoa_speach")


function MiddleContent() {
  const [show, setShow] = React.useState(false)
  const [data, setData] = React.useState([])

  const clickEffect = () => {
    setShow((prev) => (!prev))
  }


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
    <div>

      <div className="allGoodwill"  >

        🏹<div className="line1"></div>
        <div className="goodwillfont">&nbsp;Good Will&nbsp; </div>
        <div className="line2" ></div>🏹
      </div>

    </div >
  )
}

export default MiddleContent


{/* <div className="allspeach">


</div>

<div
  onClick={clickEffect}
  className="speach">

  <p>
    <VideoCom show={show} setShow={setShow} title={title} vid={vid} decs={decs} id={id} />
  </p>

</div> */}

{/* <Modelvid   title={title} vid={vid} decs={decs} id={id}/> */ }