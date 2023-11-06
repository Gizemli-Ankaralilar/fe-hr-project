// UserPanel.js
import React, { useState, useEffect } from 'react';
import './styles/Panel.scss';
import Settings from '../components/Settings';
import SirketYoneticisiOnaylari from '../components/SirketYoneticisiOnaylari';
import YorumOnaylari from '../components/YorumOnaylari';

function UserPanel() {
    const [userInfo, setUserInfo] = useState({});
    const [userId, setUserId] = useState(null);
    const [activeMenu, setActiveMenu] = useState('welcome');
    const [showSirketYoneticisiOnaylari, setShowSirketYoneticisiOnaylari] = useState(false);
    const [showYorumOnaylari, setShowYorumOnaylari] = useState(false);

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

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setShowSirketYoneticisiOnaylari(false);
        setShowYorumOnaylari(false);
    };

    const handleSirketYoneticisiOnaylariClick = () => {
        setShowSirketYoneticisiOnaylari(true);
        setShowYorumOnaylari(false);
    };

    const handleYorumOnaylariClick = () => {
        setShowSirketYoneticisiOnaylari(false);
        setShowYorumOnaylari(true);
    };

    return (
        <div className="panel">
            <div className="menu">
                <ul>
                    <li onClick={() => handleMenuClick('welcome')}>
                        Hoşgeldin {userInfo.username}
                    </li>
                    <li onClick={handleSirketYoneticisiOnaylariClick}>Şirket Yöneticisi Onayları</li>
                    <li onClick={handleYorumOnaylariClick}>Yorum Onayları</li>
                    <li onClick={() => handleMenuClick('settings')}>Ayarlar</li>
                </ul>
            </div>

            <div className="content" style={{ textAlign: 'left' }}>
                {activeMenu === 'welcome' && (
                    <div>
                        <h3 style={{ textAlign: "center" }}>Hoşgeldin {userInfo.username}</h3>
                    </div>
                )}
                {activeMenu === 'settings' && userId && <Settings userId={userId} />}
                {showSirketYoneticisiOnaylari && <SirketYoneticisiOnaylari userId={userId} />}
                {showYorumOnaylari && <YorumOnaylari userId={userId} />}
            </div>
        </div>
    );
}

export default UserPanel;
