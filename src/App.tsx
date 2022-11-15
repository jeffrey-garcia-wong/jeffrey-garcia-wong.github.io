import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Quicksort from './components/Quicksort';
import Mergesort from './components/Mergesort';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/sortAlgDemo/quicksort" element={<Quicksort />}></Route>
          <Route path="/sortAlgDemo/mergesort" element={<Mergesort />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
