// src/components/Navbar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    const location = useLocation();

    // Navbar'ın görünüp görünmemesini kontrol etmek için bir fonksiyon
    const isNavbarVisible = () => {
        // Görünmesini istediğiniz sayfaların path'lerini içeren bir dizi oluşturun
        const visiblePages = ['/home', '/admin-panel', '/user-panel', '/company-panel'];

        // Eğer location.pathname, visiblePages içinde ise Navbar görünecek
        return visiblePages.some(page => location.pathname.startsWith(page));
    };

    return (
        // Navbar'ın görünüp görünmemesine karar vermek için isNavbarVisible() fonksiyonunu kullanın
        isNavbarVisible() ? (
            <div className="navbar">
                <div className="nav-left">
                    <Link to="/" className="nav-link">
                        Logo ve Başlık
                    </Link>
                </div>
                <div className="nav-center">
                    <Link to="/home" className="nav-link">
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
        ) : null
    );
}

export default Navbar;
