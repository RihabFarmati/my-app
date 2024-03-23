import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import BookDeatils from './BookDetails';
import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/store" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<BookDeatils />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
