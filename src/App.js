import './App.css';
import React, {useState} from 'react';
import './semantic/dist/semantic.min.css'
import Header from './components/Header.js';
import PaintingsPage from './components/PaintingsPage.js';
import HomePage from './components/HomePage.js';
import ContactPage from './components/ContactPage.js';
import AboutPage from './components/AboutPage.js';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [pageToLoad, setPageToLoad] = useState("homepage")

  return (
    <div className='ui container'>
      <Header pageToLoad={pageToLoad} onChangePage={setPageToLoad}/>
      <div style={{marginTop: "25px"}}>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/paintings" element={<PaintingsPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      </div>
    </div>
  );
}

