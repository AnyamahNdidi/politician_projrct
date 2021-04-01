import React from 'react'
import "./BiolandStyle.css"
import pixx from "../img/bio_banner.jpg"
import pix from "../img/newone.jpg"
import { alldb } from "../base"



const db = alldb.collection("Split_bio")

function SecondBio() {

  const [isOpen, setIsOpen] = React.useState(false);
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
    <div>
      {
        data.map(({
          name, id, image, point, decs, seconddes
        }) => (
          <div className="bio_container">
            <div className="all_bio1">
              <img src={pixx} />

            </div>
            <div className="bio_containt">
              <div className="main_bio">
                <div className="namecon" >{name}</div>
                <div className="contain_f">{decs}<p>

                </p></div>
                <div className="conImage">
                  <img src={pix} />


                </div>
                <div className="con2" id="Biolanded">

                  <p>
                    {seconddes}
                  </p>

                </div>

              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default SecondBio
