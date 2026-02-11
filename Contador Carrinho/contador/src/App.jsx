import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='teste'>
        <img src="https://etsy.com/uk/market/sandman_dream" alt="" />
        <ContadorFilho />
      </div>
    </>
  )
}

export default App
