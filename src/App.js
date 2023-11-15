// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import GuestPanel from './pages/GuestPanel';
import CompanyPanel from './pages/CompanyPanel';
import AdminPanel from './pages/AdminPanel';
import WorkerPanel from './pages/WorkerPanel';
import Navbar from './components/Navbar';

function App() {
  return (
      <Router>
        <div className="app">
          <header className="header">
            <Navbar />
          </header>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/guest-panel/*" element={<GuestPanel />} />
            <Route path="/company-panel/*" element={<CompanyPanel />} />
            <Route path="/admin-panel/*" element={<AdminPanel />} />
            <Route path="/user-panel/*" element={<WorkerPanel />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
