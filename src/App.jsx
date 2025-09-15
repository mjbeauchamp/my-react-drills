import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicLayout from './layouts/BasicLayout'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
