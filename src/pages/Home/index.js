import ContentComponent from "../../components/ContentComponent"
import TastyComponent from "../../components/TastyComponent"
import { Link } from 'react-router-dom'
import './style.css'
import VoteButtons from "../../components/VoteButtons"
import PodiumComponent from "../../components/PodiumComponent"

function Home() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex flex-column align-items-center justify-content-center p-4">

          <ContentComponent title="Sabores!" content="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
            image="This is an image" />

          <TastyComponent />

          <ContentComponent title="Produto!" content="
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          " image="This is an image" />

          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="text-muted">Por quê? O próprio gostinho do café! ˗ˏˋ☕ˎˊ˗</h1>
                <p className="p-3 bg-geral">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="col-sm-12">
                <h1>O preço? cabe no bolso! 😎</h1>
                <p className="p-3 bg-geral">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="col-sm-12">
                <h1>Emoções!? num só gole! ❤️</h1>
                <p className="p-3 bg-geral">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="col-sm-12 mb-5">
                <Link to="/product" className="link-styles">Gostou foi!? Compre agora!</Link>
              </div>
            </div>
            
          </div>

          <ContentComponent title="Votações!" content="
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          " image="This is an image" />

          <VoteButtons />
          
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
