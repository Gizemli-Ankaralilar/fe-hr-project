// src/components/Navbar.js

import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Navbar'ın görünüp görünmemesini kontrol etmek için bir fonksiyon
    const isNavbarVisible = () => {
        // Görünmesini istediğiniz sayfaların path'lerini içeren bir dizi oluşturun
        const visiblePages = ['/home', '/admin-panel', '/worker-panel', '/company-panel'];

        // Eğer location.pathname, visiblePages içinde ise Navbar görünecek
        return visiblePages.some(page => location.pathname.startsWith(page));
    };



    const handleLogout = async () => {

        const token = localStorage.getItem('token');

        try {
            const logoutData = {token};
            const response = await fetch('http://localhost:9090/api/v1/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(logoutData),
            });

            if (response.ok) {
                const responseMessage = await response.text();
                navigate(`/login` );
                setError(responseMessage)

            } else {
                window.alert("duba yok.. token yok...\n" +
                    "sen daha login olmamışın çıkışa basıyon!\n" +
                    "bakacağzz..");
                window.alert("bura boyabatta olsa çıkışı yaptırırlar sana!");
                window.alert("BAKACAAAAĞĞĞZZZZ!!!");
                await navigate(`/login`);
            }
        }catch (error) {
            console.error('Çıkış hatası:', error);
            setError('Çıkış yapılamadı.');
        }
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
                    {/*<Link to="/admin-panel" className="nav-link">*/}
                    {/*    Admin Panel*/}
                    {/*</Link>*/}
                    {/*<Link to="/company-panel" className="nav-link">*/}
                    {/*    Company Panel*/}
                    {/*</Link>*/}
                    {/*<Link to="/worker-panel" className="nav-link">*/}
                    {/*    Worker Panel*/}
                    {/*</Link>*/}
                </div>
                <div className="nav-right">
                    <button onClick={handleLogout}>Çıkış Yap</button>
                </div>
            </div>
        ) : null
    );
}

export default Navbar;
