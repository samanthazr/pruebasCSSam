// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import GetawaysLogo from './GetawaysLogo/GetawaysLogo.png'
import '../App.css'
import {Box,
  // Button 
} from '@mui/material';

function Navbar2() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <br/><br/><br/>
      <Box
        height={60}
        width={1280}
        display="flex"
        // flexDirection= "row"
        // justifyContent= "space-between"
        alignItems="center"
        alignContent="center"
        gap={4}
        p={3}
        sx={{
          backgroundColor:'#3C1C91',
          color: '#FFF',
        }}
        >
            <a href="/" target="_blank">
              <img src={GetawaysLogo} style={{height:'36px'}} className="logo" alt="Getaways logo" />
            </a>
            <p>Login</p>
            <p>Sign up</p>
        </Box>
      <div>

      </div>
      {/* <Button variant="contained">Log in</Button> */}
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>Edit <code>src/App.tsx</code> and save to test HMR</p> */}
      </div>

      {/* <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
    </>
  )
}

export default Navbar2
