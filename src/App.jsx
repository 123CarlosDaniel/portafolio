import { Routes, Route} from 'react-router-dom';

import About from "./components/About"
import Footer from './components/Footer';
import Home from "./components/Home"
import Nav from './components/Nav';
import Projects from './components/Projects';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Contact from './components/Contact';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
})

function App() {
  return (
    
    <ThemeProvider theme={darkTheme}>
      <Box backgroundColor="background.default" color={"text.primary"} sx={{minHeight:"100vh"}}>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
      </Box>
    </ThemeProvider>     
    
  )
}

export default App
