import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import GuestPanel from './pages/GuestPanel';
import CompanyPanel from './pages/CompanyPanel';
import AdminPanel from './pages/AdminPanel';
import UserPanel from './pages/UserPanel';
import Navbar from './components/Navbar';

function App() {
  return (
      <Router>
        <div className="app">
          <header className="header">
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/guest-panel" element={<GuestPanel />} />
            <Route path="/company-panel" element={<CompanyPanel />} />
            <Route path="/admin-panel/:userId" element={<AdminPanel />} />
            <Route path="/user-panel/:userId" element={<UserPanel />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
