import './App.css'
import BasicLayout from './layouts/BasicLayout'
import Home from './pages/Home'
import About from './pages/About'
import Animals from './pages/Animals'
import StarWars from './components/StarWars'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/animals' element={<Animals />} />
          <Route path='/star-wars' element={<StarWars />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
