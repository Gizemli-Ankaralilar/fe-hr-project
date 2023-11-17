// src/pages/AdminPanel.js

import React, { useState, useEffect } from 'react';
import './AdminPanel.scss';
import Settings from '../components/Settings';
import Tasks from '../components/Tasks';
import CompanyActivation from "../components/adminPanel/CompanyActivation";
import CommentApprovals from "../components/adminPanel/CommentApprovals"


function AdminPanel() {
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


    return (
        <div className="panel">
            <div className="menu">
                <ul>
                    <li onClick={() => setActiveMenu('company-activation')}>Şirket Aktivasyonu</li>
                    <li onClick={() => setActiveMenu('commment-approvals')}>Yorum Onayları</li>
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
                {activeMenu === 'company-activation' &&  <CompanyActivation userId={userId} />}
                {activeMenu === 'comment-approvals' &&  <CommentApprovals userId={userId} />}
                {activeMenu === 'settings' &&  <Settings userId={userId} />}
                {activeMenu === 'tasks' && <Tasks userId={userId} />}

            </div>
        </div>
    );

}

export default AdminPanel;
