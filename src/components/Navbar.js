/* src/components/Navbar.js */

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-link">
          Logo ve Başlık
        </Link>
      </div>
      <div className="nav-center">
        <Link to="/" className="nav-link">
          Anasayfa
        </Link>
        <Link to="/kurumsal" className="nav-link">
          Kurumsal
        </Link>
        <Link to="/hizmetlerimiz" className="nav-link">
          Hizmetlerimiz
        </Link>
        <Link to="/iletisim" className="nav-link">
          İletişim
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/login" className="nav-link">
          Giriş
        </Link>
        <Link to="/register" className="nav-link">
          Kayıt
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
