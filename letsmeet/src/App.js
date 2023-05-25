import React, { Component, useEffect, useRef, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Peer from 'simple-peer'
import Home from './components/pages/home/Home';
import Vc from './components/pages/vc.js'


function App() {

  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/vc" element={<Vc/>}/>
      </Routes>
    </Router>
    // <Vc/>
  );
}

export default App;
