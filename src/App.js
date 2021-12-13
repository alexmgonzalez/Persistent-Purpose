import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import MyLife from './Components/Pages/MyLife';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path = '/Persistent-Purpose/' element={<Home/>} />
          <Route path = '/my-life' element={<MyLife/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
