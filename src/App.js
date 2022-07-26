import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HelloWorld />} />
    </Routes>
  </Router>
);

export default App;
