// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import './Home.scss';
import CompanySearch from '../components/CompanySearch';
import HomePage from '../components/HomePage';

function Home() {
    const [userInfo, setUserInfo] = useState({});
    const [userId, setUserId] = useState(null);
    const [activeMenu, setActiveMenu] = useState('welcome');

    useEffect(() => {
        const pathParts = window.location.pathname.split('/');
        const urlUserId = pathParts[pathParts.length - 1];

        if (urlUserId && urlUserId !== 'undefined') {
            setUserId(urlUserId);
        }
    }, []);

    return (
        <div className="panel">
            <div className="menu">
                <ul>
                    <li onClick={() => setActiveMenu('home')}>Ana Sayfa</li>
                    <li onClick={() => setActiveMenu('company-search')}>Şirket Ara</li>
                    {/* Ayarlar menüsü çıkarıldı */}
                </ul>
            </div>

            <div className="content" style={{ textAlign: 'left' }}>
                {activeMenu === 'welcome' && (
                    <div>
                        <h3 style={{ textAlign: "center" }}>Hoşgeldin {userInfo.username}</h3>
                    </div>
                )}
                {activeMenu === 'company-search' && userId && <CompanySearch userId={userId} />}
                {activeMenu === 'home' && userId && (
                    <div>
                        {/* Render the HomePage component */}
                        <HomePage />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
