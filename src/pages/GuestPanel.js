import React, { useState, useEffect } from 'react';
import './styles/Panel.scss';
import GuestInformation from '../components/GuestInformation'; // GuestInformation bileşenini içe aktarın
import Settings from '../components/Settings'; // Ayarlar bileşenini içe aktarın

function GuestPanel() {
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

    useEffect(() => {
        if (userId && activeMenu === 'user-info') {
            fetch(`http://localhost:9094/api/v1/user/${userId}/information`)
                .then((response) => response.json())
                .then((data) => {
                    setUserInfo(data);
                })
                .catch((error) => {
                    console.error('Kullanıcı bilgi alma hatası:', error);
                });
        }
    }, [userId, activeMenu]);

    return (
        <div className="panel">
            <div className="menu">
                <ul>
                    <li onClick={() => setActiveMenu('welcome')}>
                        Hoşgeldin {userInfo.username}
                    </li>
                    <li onClick={() => setActiveMenu('user-info')}>Ziyaretçi Bilgileri</li>
                    <li onClick={() => setActiveMenu('settings')}>Ayarlar</li>
                </ul>
            </div>

            <div className="content" style={{ textAlign: 'left' }}>
                {activeMenu === 'welcome' && (
                    <div>
                        <h3 style={{ textAlign: "center" }}>Hoşgeldin {userInfo.username}</h3>
                    </div>
                )}
                {activeMenu === 'user-info' && userId && <GuestInformation userId={userId} />} {/* GuestInformation kullanıldı */}
                {activeMenu === 'settings' && userId && <Settings userId={userId} />} {/* Ayarlar bileşeni eklendi */}
            </div>
        </div>
    );
}

export default GuestPanel;
