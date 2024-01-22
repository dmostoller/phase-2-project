import './App.css';
import React, {useState} from 'react';
import './semantic/dist/semantic.min.css'
import Header from './components/Header.js';
import PaintingsPage from './components/PaintingsPage.js';
import HomePage from './components/HomePage.js';

export default function App() {
  const [pageToLoad, setPageToLoad] = useState("homepage")

  return (
    <div className='ui container'>
      <Header pageToLoad={pageToLoad} onChangePage={setPageToLoad}/>
      <HomePage />
      <div style={{marginTop: "25px"}}>
      <PaintingsPage />
      </div>
    </div>
  );
}

