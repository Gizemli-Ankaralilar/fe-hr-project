// GuestPanel.js
import React, { useState, useEffect } from 'react';
import './styles/Panel.scss';
import UserInformation from '../components/UserInformation';

function GuestPanel() {
    const [userInfo, setUserInfo] = useState({});
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Kullanıcı kimliği (userId) URL'den alınacak
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
                    <li>Ziyaretçi Paneli</li>
                    <li>Hoşgeldin {userInfo.username}</li>
                    {userId && (
                        <li>
                            <UserInformation userId={userId} />
                        </li>
                    )}
                    <li>Ayarlar</li>
                </ul>
            </div>

            {/* Sağ taraftaki içerik alanı */}
            <div className="content">
                {/* İçerikler burada olacak */}
            </div>
        </div>
    );
}

export default GuestPanel;
