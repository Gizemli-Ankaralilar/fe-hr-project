// src/components/Navbar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    const location = useLocation();

    // Navbar'ın görünüp görünmemesini kontrol etmek için bir fonksiyon
    const isNavbarVisible = () => {
        // Görünmesini istediğiniz sayfaların path'lerini içeren bir dizi oluşturun
        const visiblePages = ['/home', '/admin-panel', '/worker-panel', '/company-panel'];

        // Eğer location.pathname, visiblePages içinde ise Navbar görünecek
        return visiblePages.some(page => location.pathname.startsWith(page));
    };

    return (
        // Navbar'ın görünüp görünmemesine karar vermek için isNavbarVisible() fonksiyonunu kullanın
        isNavbarVisible() ? (
            <div className="navbar">
                <div className="nav-left">
                    <Link to="/" className="nav-link">
                        İNSAN KAYNAKLARI YÖNETİM SİSTEMİ
                    </Link>
                </div>
                <div className="nav-center">
                    <Link to="/home" className="nav-link">
                        Anasayfa
                    </Link>
                    <Link to="/admin-panel" className="nav-link">
                        Admin Panel
                    </Link>
                    <Link to="/company-panel" className="nav-link">
                        Company Panel
                    </Link>
                    <Link to="/worker-panel" className="nav-link">
                        Worker Panel
                    </Link>
                </div>
                <div className="nav-right">
                    <Link to="/buraya_logout_linki_gelecek" className="nav-link">   /////// BURAYA LOGOUT LINKI LAZIM
                        Çıkış Yap
                    </Link>
                </div>
            </div>
        ) : null
    );
}

export default Navbar;
