import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login';
import Services from './Pages/Services';

function App() {
  useEffect( () => {
    AOS.init();
  },[])

  return (
    <div>
     <Navbar>  
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
        </Routes>
     </Navbar>
    </div>
  );
}

export default App;
