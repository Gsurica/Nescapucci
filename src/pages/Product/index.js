
import './style.css'
import coffeImageOne from '../../assets/images/coffes/coffe-1.jpg'
import coffeImageTwo from '../../assets/images/coffes/coffe-2.jpg'
import coffeImageThree from '../../assets/images/coffes/coffe-3.jpg'

function Prouduct() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex flex-column align-items-center">
            <h1 className="display-5">Conheça o Nescapucci!</h1>
            <span className="display-5 text-white">Imersão ao mundo <span className="text-color">amarguinho</span>!</span>
          </div>
        </div>
      </div>
      <div className="container mt-5 p-3 bg-geral">
        <div className="row">
          <div className="col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-muted mb-3">O produto que almejamos lhe vender!</h1>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="col-sm-12 d-flex justify-content-center">
                  <div className="coffe-container d-flex justify-content-center">
                      <img src={coffeImageOne} alt="" className="coffe-content"/>
                  </div>
                </div>
                <div className="col-sm-12 mt-4">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="col-sm-12 d-flex justify-content-center">
                  <div className="coffe-container d-flex justify-content-center">
                      <img src={coffeImageTwo} alt="" className="coffe-content"/>
                  </div>
                </div>
                <div className="col-sm-12 mt-4">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="col-sm-12 d-flex justify-content-center">
                  <div className="coffe-container d-flex justify-content-center">
                      <img src={coffeImageThree} alt="" className="coffe-content"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Prouduct;