


function BaristComponent(prop) {

  return (
    <>
      <div className="barist-image-container mb-5">
        <img src={prop.barist} className="barist-image-content" alt="" />
        {prop.description}
      </div>
    </>
  )
}

export default BaristComponent