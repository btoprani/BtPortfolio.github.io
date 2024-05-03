import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Amigurumate from './pages/Amigurumate';
import JCrew from './pages/JCrew';

export default function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='amigurumate' element={<Amigurumate />} />
                <Route path='jcrew' element={<JCrew />} />
            </Routes>
        </BrowserRouter>
    );
}
