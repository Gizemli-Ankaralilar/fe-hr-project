// src/pages/CompanyPanel.js

import React, { useState, useEffect } from 'react';
import './CompanyPanel.scss';
import Settings from '../components/Settings';
import Company from '../components/companyPanel/Company';
import PersonalAdd from '../components/companyPanel/WorkerAdd';
import CompanyInformation from '../components/companyPanel/CompanyInformation';
import Tasks from "../components/Tasks";


function CompanyPanel() {
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
                    <li onClick={() => setActiveMenu('welcome')}>{userInfo.username}</li>
                    <li onClick={() => setActiveMenu('company-info')}>Şirket Yönetimi</li>
                    <li onClick={() => setActiveMenu('company-information')}>Şirket Bilgileri</li> {/* Şirket Bilgileri menüsünü ekledik */}
                    <li onClick={() => setActiveMenu('personnel-add')}>Personel Ekle</li>
                    <li onClick={() => setActiveMenu('switch-panel')}>Personel Sayfasına Geç</li>
                    <li onClick={() => setActiveMenu('settings')}>Ayarlar</li>
                    <li onClick={() => setActiveMenu('tasks')}>Yapılacaklar</li>
                </ul>
            </div>

            <div className="content" style={{ textAlign: 'left' }}>
                {activeMenu === 'welcome' && (
                    <div>
                        <h3 style={{ textAlign: "center" }}>Hoşgeldin {userInfo.username}</h3>
                    </div>
                )}
                {activeMenu === 'settings' && userId && <Settings userId={userId} />}
                {activeMenu === 'company-info' && userId && <Company companyId={userId} />}
                {activeMenu === 'company-information' && userId && <CompanyInformation userId={userId} />} {/* Şirket Bilgileri menüsü için CompanyInformation bileşenini ekledik */}
                {activeMenu === 'personnel-add' && <PersonalAdd userId={userId} />}
                {activeMenu === 'tasks' && <Tasks userId={userId} />}

            </div>
        </div>
    );
}

export default CompanyPanel;
