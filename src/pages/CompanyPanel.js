// src/pages/CompanyPanel.js

import React, { useState, useEffect } from 'react';
import './CompanyPanel.scss';

import Company from '../components/companyPanel/Company';
import CompanyInformation from '../components/companyPanel/CompanyInformation';
import CompanyManagement from "../components/companyPanel/CompanyManagement";
import PersonalAdd from '../components/companyPanel/WorkerAdd';
import Tasks from "../components/Tasks";
import Settings from '../components/Settings';


function CompanyPanel() {
    const [userInfo, setUserInfo] = useState({});
    const [companyInfo, setCompanyInfo] = useState({});
    const [activeMenu, setActiveMenu] = useState('welcome');

    const loginToken = localStorage.getItem("loginToken")
    const userId = localStorage.getItem("loggedUserId")
    const userRole = localStorage.getItem("loggedUserRole")

    useEffect(() => {
        const pathParts = window.location.pathname.split('/');
        const urlUserId = pathParts[pathParts.length - 1];


    }, []);

    const fetchUserInfo = (menu) => {
        if (userId && menu === 'company-information') {
            fetch(`http://localhost:9094/api/v1/user/${userId}/information`)
                .then((response) => response.json())
                .then((data) => {
                    setUserInfo(data);
                })
                .catch((error) => {
                    console.error('Kullanıcı bilgi alma hatası:', error);
                });
        }
    };

    useEffect(() => {
        fetchUserInfo(activeMenu);
    }, [userId, activeMenu]);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        fetchUserInfo(menu);
    };

    return (
        <div className="panel">
            <div className="menu">
                <ul>
                    <li onClick={() => handleMenuClick('company')}>Şirket Yönetimi</li>
                    <li onClick={() => handleMenuClick('company-information')}>Şirket Bilgileri</li>
                    <li onClick={() => handleMenuClick('personnel-add')}>Personel Ekle</li>
                    <li onClick={() => handleMenuClick('tasks')}>Yapılacaklar</li>
                    <li onClick={() => handleMenuClick('settings')}>Ayarlar</li>
                    <li onClick={() => handleMenuClick('switch-panel')}>Personel Sayfasına Geç</li>
                </ul>
            </div>

            <div className="content" style={{ textAlign: 'left' }}>
                {activeMenu === 'welcome' && (
                    <div>
                        <h3 style={{ textAlign: "center" }}>Hoşgeldin {userInfo.username}</h3>
                    </div>
                )}
                {activeMenu === 'company' && <Company companyId={userId} />}
                {activeMenu === 'company-information' && <CompanyInformation userId={userId}/>}
                {activeMenu === 'personnel-add' && <PersonalAdd userId={userId} />}
                {activeMenu === 'tasks' && <Tasks userId={userId} />}
                {activeMenu === 'settings' && <Settings userId={userId} />}
            </div>
        </div>
    );
}

export default CompanyPanel;

