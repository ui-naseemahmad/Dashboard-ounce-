
import './App.css';
import React from 'react';
import { Panel } from './Panel';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
    <Panel/>
    </BrowserRouter>
    </>
  );
}

export default App;
