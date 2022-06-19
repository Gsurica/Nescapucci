function ContentComponent(props) {
  return (
    <>
      <h1 className="display-1 text-color">{props.title}</h1>
      <p className="mt-4 text-white">{props.content}</p>
    </>
  )
}

export default ContentComponent;