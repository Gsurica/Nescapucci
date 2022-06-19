import firebase from '../../firebaseConnection'
import {useState, useEffect} from 'react'
import './styles.css'

function VoteButtons() {

  const tastyList = ['café com leite', 'expresso', 'tradicional']

  const [dbVoteOne, setDbVoteOne] = useState(0)
  const [dbVoteTwo, setDbVoteTwo] = useState(0)
  const [dbVoteThree, setDbVoteThree] = useState(0)

  useEffect(() => {
    firebase.firestore().collection('votos')
    .doc('XpnwMNajdB66WQVQ4iun')
    .get().then(snap => {
    let anchor = snap.data().anchor
    setDbVoteOne(anchor)
    })

    firebase.firestore().collection('votos')
    .doc('XpnwMNajdB66WQVQ4iun')
    .get().then(snap => {
    let anchor = snap.data().anchorVote2
    setDbVoteTwo(anchor)
    console.log(dbVoteTwo)
    })

    firebase.firestore().collection('votos')
    .doc('XpnwMNajdB66WQVQ4iun')
    .get().then(snap => {
    let anchor = snap.data().anchorVote3
    setDbVoteThree(anchor)
    console.log(dbVoteThree)
    })
  }, [])

  async function getDataBaseVoteTastyOne() {
    await firebase.firestore().collection('votos')
    .doc('XpnwMNajdB66WQVQ4iun')
    .get().then((snapshot) => {
      setDbVoteOne(snapshot.data().votos_sabor_1)
      console.log(dbVoteOne)  
    }).then(() => {
      setDbVoteOne(dbVoteOne + 1)
      firebase.firestore().collection('votos')
      .doc('XpnwMNajdB66WQVQ4iun')
      .update({
        anchor: dbVoteOne + 1,
        votos_sabor_1: dbVoteOne + 1
      })
    })
  }

  async function getDataBaseVoteTastyTwo() {
    await firebase.firestore().collection('votos')
    .doc('XpnwMNajdB66WQVQ4iun')
    .get().then(snapshot => {
      setDbVoteTwo(snapshot.data().votos_sabor_2)
    }).then(async () => {
      setDbVoteTwo(dbVoteTwo + 1)
      await firebase.firestore().collection('votos')
      .doc('XpnwMNajdB66WQVQ4iun')
      .update({
        anchorVote2: dbVoteTwo + 1,
        votos_sabor_2: dbVoteTwo + 1
      })
    })
  }

  async function getDataBaseVoteTastyThree() {
    await firebase.firestore().collection('votos')
    .doc('XpnwMNajdB66WQVQ4iun')
    .get().then(snapshot => {
      setDbVoteThree(snapshot.data().votos_sabor_3)
    }).then(async () => {
      setDbVoteThree(dbVoteThree + 1)
      await firebase.firestore().collection('votos')
      .doc('XpnwMNajdB66WQVQ4iun')
      .update({
        anchorVote3: dbVoteThree + 1, 
        votos_sabor_3: dbVoteThree + 1
      })
    })
  }


  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 justify-content-center d-flex align-items-center mb-2">
            <button className="vote-buttons d-flex flex-column align-items-center justify-content-around" onClick={getDataBaseVoteTastyOne}>Café com leite

            {dbVoteOne > 0 && (
              <div className="mt-5">
                {dbVoteOne}
              </div>
            )}

            {dbVoteOne === dbVoteTwo && dbVoteOne !== 0 &&  (
              <div>
                <span>Empatados! 🎖️ {tastyList[0]} e {tastyList[1]} 🎖️</span>
              </div>
            )}

            {dbVoteOne === dbVoteThree && dbVoteOne !== 0 &&  (
              <div>
                <span>Empatados! 🎖️ {tastyList[0]} e {tastyList[2]} 🎖️</span>
              </div> 
            )}

            {dbVoteOne > dbVoteTwo && dbVoteOne > dbVoteThree && (
              <div>
                <span className="display-5">Primeiro lugar 🥇</span>
              </div>
            )}

            {dbVoteOne < dbVoteTwo && dbVoteOne > dbVoteThree && (
              <div>
                <span className="display-5">Segundo lugar 🥈</span>
              </div>
            )}

            {dbVoteOne > dbVoteTwo && dbVoteOne < dbVoteThree && (
              <div>
                <span className="display-5">Segundo lugar 🥈</span>
              </div>
            )}

            {dbVoteOne < dbVoteTwo && dbVoteOne < dbVoteThree && (
              <div>
                <span className="display-5">Ultimo Lugar 🥉</span>
              </div>
            )}

            {dbVoteOne === 0  ? (
              <div>
                <span className="text-muted">Poxa ninguém votou ainda! 😓</span>
              </div>
            ): 
              <></>
            }

            </button>
          </div>
          <div className="col-sm-12 justify-content-center d-flex align-items-center mb-2">
            <button className="vote-buttons d-flex flex-column align-items-center justify-content-around" onClick={getDataBaseVoteTastyTwo}>Expresso  

            {dbVoteTwo > 0 && (
              <div className="mt-5">
                {dbVoteTwo}
              </div>
            )}

            {dbVoteTwo === dbVoteOne && dbVoteTwo !== 0 && (
              <div>
                <span>Empatados! 🎖️ {tastyList[1]} e {tastyList[0]} 🎖️</span>
              </div>
            )}

            {dbVoteTwo === dbVoteThree && dbVoteTwo !== 0 &&  (
              <div>
                <span>Empatados! 🎖️ {tastyList[1]} e {tastyList[2]} 🎖️</span>
              </div> 
            )}
            
            {dbVoteTwo > dbVoteOne && dbVoteTwo > dbVoteThree && (
              <div>
                <span className="display-5">Primeiro lugar 🥇</span>
              </div>
            )}

            {dbVoteTwo < dbVoteOne && dbVoteTwo > dbVoteThree && (
              <div>
                <span className="display-5">Segundo lugar 🥈</span>
              </div>
            )}

            {dbVoteTwo > dbVoteOne && dbVoteTwo < dbVoteThree && (
              <div>
                <span className="display-5">Segundo lugar 🥈</span>
              </div>
            )}

            {dbVoteTwo < dbVoteOne && dbVoteTwo < dbVoteThree && (
              <div>
                <span className="display-5">Ultimo Lugar 🥉</span>
              </div>
            )}

            {dbVoteTwo === 0  ? (
              <div>
                <span className="text-muted">Poxa ninguém votou ainda! 😓</span>
              </div>
            ): 
              <></>
            } 

            </button>
          </div>
          <div className="col-sm-12 justify-content-center d-flex align-items-center">
            <button className="vote-buttons d-flex flex-column align-items-center justify-content-around" onClick={getDataBaseVoteTastyThree}>Tradicional

            {dbVoteThree > 0 && (
              <div className="mt-5">
                {dbVoteThree}
              </div>
            )}

            {dbVoteThree === dbVoteOne && dbVoteThree !== 0 && (
              <div>
                <span>Empatados! 🎖️ {tastyList[2]} e {tastyList[0]} 🎖️</span>
              </div>
            )}

            {dbVoteThree === dbVoteTwo && dbVoteThree !== 0 && (
              <div>
                <span>Empatados! 🎖️ {tastyList[2]} e {tastyList[1]} 🎖️</span>
              </div> 
            )}

            {dbVoteThree > dbVoteTwo && dbVoteThree > dbVoteOne && (
              <div>
                <span className="display-5">Primeiro lugar 🥇</span>
              </div>
            )}

            {dbVoteThree < dbVoteTwo && dbVoteOne < dbVoteThree && (
              <div>
                <span className="display-5">Segundo lugar 🥈</span>
              </div>
            )}

            {dbVoteThree > dbVoteTwo && dbVoteThree < dbVoteOne && (
              <div>
                <span className="display-5">Segundo lugar 🥈</span>
              </div>
            )}

            {dbVoteThree < dbVoteTwo && dbVoteThree < dbVoteOne && (
              <div>
                <span className="display-5">Ultimo Lugar 🥉</span>
              </div>
            )}

            {dbVoteThree === 0  ? (
              <div>
                <span className="text-muted">Poxa ninguém votou ainda! 😓</span>
              </div>
            ): 
              <></>
            }

            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default VoteButtons
