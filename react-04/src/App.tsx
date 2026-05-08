import './App.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'


function App() {
  

  return (
    <>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact/test">Contact</Link>
          <br/>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact/:name" element={<Contact/>} />
        </Routes>
    </>
  )
}

export default App
