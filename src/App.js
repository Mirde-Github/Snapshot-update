
import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Sun from './Sun';
import Nature from './Nature';
import Food from './Food';
import Earth from './Earth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Earth" element={<Earth />} />
          <Route path="/sun" element={<Sun />} />
          <Route path="/Nature" element={<Nature />} />
          <Route path='/Food' element={<Food />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
