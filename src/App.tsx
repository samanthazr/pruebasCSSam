import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './views/LandingPage';
import Login from './views/Login';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3C1392',
    },
    secondary: {
      main: '#C9F305',
    },
    info: {
      main: '#0288d1',
    },
    background: {
      default: '#ffffff',
      paper: '#E1F5F4',
    },
    divider: '#3C1C91',
    text: {
      secondary: '#3C1C91',
      disabled: '#808080',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  shape: {
    borderRadius: 10,
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login/>} />
            </Routes>
            <Footer/>
          </Router>
      </ThemeProvider>
    </>
  )
}

export default App