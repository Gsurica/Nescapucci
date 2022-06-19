import './style.css'

function ButtonContent(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-center text-white bg-geral flex-column p-4 rounded">
          {props.content}
        </div>
      </div>
    </div>
  )
}

export default ButtonContent