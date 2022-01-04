import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SocialMediaBar from './Components/SocialMediaBar';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import MyLife from './Components/Pages/MyLife';
import MyWork from './Components/Pages/MyWork';
import About from './Components/Pages/About';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <SocialMediaBar/>
        <Routes>
          <Route path = '/Persistent-Purpose/' element={<Home/>} />
          <Route path = '/my-life' element={<MyLife/>} />
          <Route path = '/my-work' element={<MyWork/>} />
          <Route path = '/about' element={<About/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
