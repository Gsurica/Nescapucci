
import barist1 from '../../assets/images/barist/image1.jpeg'
import barist2 from '../../assets/images/barist/image2.jpeg'
import barist3 from '../../assets/images/barist/image3.jpeg'
import barist4 from '../../assets/images/barist/image4.jpeg'
import barist5 from '../../assets/images/barist/image5.jpeg'
import barist6 from '../../assets/images/barist/image6.jpeg'
import barist7 from '../../assets/images/barist/image7.jpeg'
import BaristComponent from '../../components/BaristComponent'

import {useEffect, useState} from 'react'

import './styles.css'

function About() {

  const [barists, setBarists] = useState([])
 
  useEffect(() => {

    function puttingBarists() {
      setBarists([barist1, barist2, barist3, barist4, barist5, barist6, barist7])
    }
    puttingBarists()

  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center p-4 flex-column align-items-center text-white">
            <h1 className="display-1 text-color">Mas, e ai!? quem são os baristas??</h1>

            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center flex-column align-items-center p-1">

            {barists.length !== 0 && (
              barists.map((barist, id) => {
                return (
                  <ul key={id} className="list-style">
                    <li id={id}>
                      <BaristComponent barist={barist} />
                    </li>
                  </ul>
                )
              })
            )}
          </div>
        </div>
      </div>

    </>
  )
}

export default About