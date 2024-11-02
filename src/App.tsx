import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './views/LandingPage'
function App() {

  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <Footer/>
        </Router>
    </>
  )
}

export default App
