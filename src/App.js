import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

import './App.scss'

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

export default App
