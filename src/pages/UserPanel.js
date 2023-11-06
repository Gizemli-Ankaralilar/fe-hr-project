import React, { useState, useEffect } from 'react';
import './styles/Panel.scss';
import UserInformation from '../components/UserInformation';
import Settings from '../components/Settings';
import CompanyInformation from '../components/CompanyInformation';
import Yorum from '../components/Yorum'; // Yorum bileşenini içe aktarın

function UserPanel() {
    const [userInfo, setUserInfo] = useState({});
    const [companyInfo, setCompanyInfo] = useState({});
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

    useEffect(() => {
        if (userId && activeMenu === 'company-info') {
            fetch(`http://localhost:9094/api/v1/company/${userId}/information`)
                .then((response) => response.json())
                .then((data) => {
                    setCompanyInfo(data);
                })
                .catch((error) => {
                    console.error('Şirket bilgi alma hatası:', error);
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
                    <li onClick={() => setActiveMenu('user-info')}>Personel Bilgileri</li>
                    <li onClick={() => setActiveMenu('company-info')}>Şirket Bilgileri</li>
                    <li onClick={() => setActiveMenu('yorum')}>Yorum</li> {/* Yorum seçeneğini ekleyin */}
                    <li onClick={() => setActiveMenu('settings')}>Ayarlar</li>
                </ul>
            </div>

            <div className="content" style={{ textAlign: 'left' }}>
                {activeMenu === 'welcome' && (
                    <div>
                        <h3 style={{ textAlign: "center" }}>Hoşgeldin {userInfo.username}</h3>
                    </div>
                )}
                {activeMenu === 'user-info' && userId && <UserInformation userId={userId} />}
                {activeMenu === 'settings' && userId && <Settings userId={userId} />}
                {activeMenu === 'company-info' && userId && <CompanyInformation companyId={userId} />}
                {activeMenu === 'yorum' && userId && <Yorum userId={userId} />} {/* Yorum bileşenini ekleyin */}
            </div>
        </div>
    );
}

export default UserPanel;
