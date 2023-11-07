import React, { useState, useEffect } from 'react';
import './styles/Panel.scss';
import Settings from '../components/Settings';
import SirketYoneticisiOnaylari from '../components/SirketYoneticisiOnaylari';
import YorumOnaylari from '../components/YorumOnaylari';

function AdminPanel() {
    const [userInfo, setUserInfo] = useState({});
    const [userId, setUserId] = useState(null);
    const [activeMenu, setActiveMenu] = useState('onay-islemleri');
    const [showSirketYoneticisiOnaylari, setShowSirketYoneticisiOnaylari] = useState(false);
    const [showYorumOnaylari, setShowYorumOnaylari] = useState(false);

    useEffect(() => {
        const pathParts = window.location.pathname.split('/');
        const urlUserId = pathParts[pathParts.length - 1];

        if (urlUserId && urlUserId !== 'undefined') {
            setUserId(urlUserId);
        }
    }, []);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setShowSirketYoneticisiOnaylari(false);
        setShowYorumOnaylari(false);
    };

    const handleOnaylarClick = () => {
        setActiveMenu('onaylar');
    };

    return (
        <div className="panel">
            <div className="menu">
                <ul>
                    <li onClick={handleOnaylarClick}>Onay İşlemleri</li>
                    <li onClick={() => handleMenuClick('settings')}>Ayarlar</li>
                </ul>
            </div>

            <div className="content" style={{ textAlign: 'left' }}>
                {activeMenu === 'onaylar' && (
                    <div>
                        <h3 style={{ textAlign: "center" }}>Onay İşlemleri</h3>
                        <div className="tabs">
                            <button onClick={() => { setShowSirketYoneticisiOnaylari(true); setShowYorumOnaylari(false); }}>Yönetici Onayları</button>
                            <button onClick={() => { setShowSirketYoneticisiOnaylari(false); setShowYorumOnaylari(true); }}>Yorum Onayları</button>
                        </div>
                        {showSirketYoneticisiOnaylari && (
                            <SirketYoneticisiOnaylari userId={userId} />
                        )}
                        {showYorumOnaylari && (
                            <YorumOnaylari userId={userId} />
                        )}
                    </div>
                )}

                {activeMenu === 'settings' && (
                    <div>
                        <h3 style={{ textAlign: "center" }}>Ayarlar</h3>
                        <Settings userId={userId} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminPanel;
