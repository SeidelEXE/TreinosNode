//import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import LoginForm from './pages/LoginForm'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
