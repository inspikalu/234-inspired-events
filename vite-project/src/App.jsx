import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'; 
import About from './routes/About'; 
import Services from './routes/Services'; 
import Gallery from './routes/Gallery'; 
import Contact from './routes/Contact'; 

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='/services' element={<Services />} /> 
          <Route path='/gallery' element={<Gallery />} /> 
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App;