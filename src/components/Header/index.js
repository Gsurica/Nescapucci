import { Link } from 'react-router-dom'
import './style.css'
import divider from '../../assets/images/divider.png'

function Header() {
  return (
    <header>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <h1 className="display-1">Nesca<span className="text-color">pucci</span>!</h1>
            <p className="text-color display-5 p-4">Onde o café tem espaço em sua vida!</p>
          </div>
          <div className="col-sm-12">
            <div className="image-container">
              <img src={divider} alt="" className="divider-content" />
            </div>
          </div>
          <div className="col-sm-12 d-flex flex-column align-items-center bg-geral p-2">
            <Link to="/" className="btn text-white">Home</Link>
            <Link to="/about" className="btn text-white">Sobre</Link>
            <Link to="/product" className="btn text-white">Produto</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header