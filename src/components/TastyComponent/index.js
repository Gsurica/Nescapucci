import './style.css'
import {useState} from 'react'
import ButtonContent from '../ButtonContent'

function TastyComponent() {

  const [buttonContent, setButtonContent] = useState(false)

  function showButtonContent() {
    setButtonContent(previusState => !previusState)
  }

  return (
    <>
      <div className="container p-3 mb-3">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-around">
            <button type="button" className="button" onClick={showButtonContent}>Quer ver mais?</button>
          </div>
        </div>
      </div> 

      {buttonContent && (
        <>
          <div className="container mb-5">
            <div className="row">
              <div className="col-sm-12">
                <ButtonContent content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
              </div>
            </div>
          </div>

          <div className="container mb-5">
            <div className="row">
              <div className="col-sm-12">
                <ButtonContent content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <ButtonContent content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
              </div>
            </div>
          </div>
        </>
      )}

    </>
  )
}

export default TastyComponent

