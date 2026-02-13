import { useState } from 'react'
import './App.css'

function App() {

  const [sexos, setSexos] = useState(40)
  const [frase, setFrase] = useState('')

/*  function mostraFrase(){
    setFrase(frase)
  }*/

  function transar(){
    setSexos( sexos +1) // mema merda que : prevsexos => prevsexos + 1
    console.log(sexos)
  }

  function mostraValor(){
    alert(frase)
  }

  var enviar = async()=> {
    await fetch(
      'http://localhost:3333/frase',
      {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        frase
      })
      }
    )
  }

  return (
    <>
      <div>
        quantidade de sexos: {sexos} <br />
        <button onClick={transar}>trepar</button>
        <button onClick={mostraValor}>plotar valor</button>

        <p>texto digitado? {frase}</p>
        <input value={frase} onChange={e => setFrase(e.target.value)} type="text" /> {/* aqui você captura valores do front */}
        <button onClick={enviar}><b>ENVIAR</b></button>
      </div>
    </>
  )
}


export default App
