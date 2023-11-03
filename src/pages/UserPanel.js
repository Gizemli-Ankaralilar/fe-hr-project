// UserPanel.js
import React, { useState, useEffect } from 'react';
import './styles/Panel.scss';
import UserInformation from '../components/UserInformation';
import Settings from '../components/Settings';

function UserPanel() {
    const [userInfo, setUserInfo] = useState({});
    const [userId, setUserId] = useState(null);
    const [activeMenu, setActiveMenu] = useState('welcome'); // Varsayılan olarak Hoşgeldin bölümünü göster

    useEffect(() => {
        // Kullanıcı kimliği (userId) URL'den alınacak
        const pathParts = window.location.pathname.split('/');
        const urlUserId = pathParts[pathParts.length - 1];

        if (urlUserId && urlUserId !== 'undefined') {
            setUserId(urlUserId);
        }
    }, []);

    // Kullanıcı bilgilerini almak için ayrı bir useEffect kullanalım
    useEffect(() => {
        if (userId && activeMenu === 'user-info') {
            // Kullanıcı bilgilerini almak için bir fetch isteği yapın
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
                    <li onClick={() => setActiveMenu('user-info')}>Kullanıcı Bilgileri</li>
                    <li onClick={() => setActiveMenu('settings')}>Ayarlar</li>
                </ul>
            </div>

            {/* Sağ taraftaki içerik alanı */}
            <div className="content">
                {activeMenu === 'welcome' && (
                    <div>
                        <h3>Hoşgeldin {userInfo.username}</h3>
                        {/* Diğer hoşgeldin bilgilerini buraya ekleyebilirsiniz */}
                    </div>
                )}
                {activeMenu === 'user-info' && userId && <UserInformation userId={userId} />}
                {activeMenu === 'settings' && userId && <Settings userId={userId} />}
            </div>
        </div>
    );
}

export default UserPanel;
