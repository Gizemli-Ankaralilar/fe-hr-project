// src/pages/WorkerPanel.js

import React, { useState, useEffect } from 'react';
import './WorkerPanel.scss';
import UserInformation from '../components/UserInformation';
import Settings from '../components/Settings';
import CompanyInformation from '../components/CompanyInformation';
import Yorum from '../components/Yorum';
import { useParams } from 'react-router-dom'; // useParams hook'unu içe aktarın
import Tasks from "../components/Tasks";

function WorkerPanel() {
    const { userId } = useParams(); // useParams hook'u ile userId'i alın

    const [userInfo, setUserInfo] = useState({});
    const [companyInfo, setCompanyInfo] = useState({});
    const [activeMenu, setActiveMenu] = useState('welcome');

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
                    <li onClick={() => setActiveMenu('welcome')}>{userInfo.username}</li>
                    <li onClick={() => setActiveMenu('user-info')}>Personel Bilgileri</li>
                    <li onClick={() => setActiveMenu('company-info')}>Şirket Bilgileri</li>
                    <li onClick={() => setActiveMenu('yorum')}>Yorum</li>
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
                {activeMenu === 'user-info' && userId && <UserInformation userId={userId} />}
                {activeMenu === 'settings' && userId && <Settings userId={userId} />}
                {activeMenu === 'company-info' && userId && <CompanyInformation companyId={userId} />}
                {activeMenu === 'yorum' && userId && <Yorum userId={userId} />}
                {activeMenu === 'tasks' && <Tasks userId={userId} />}
            </div>

        </div>
    );
}

export default WorkerPanel;
