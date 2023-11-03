/* src/pages/CompanyPanel.js */

import React from 'react';
import './styles/Panel.scss';

function CompanyPanel() {
    return (
        <div className="panel">
            <div className="menu">
                <ul>
                    <li>Şirket Yönetim Paneli</li>
                    <li>Şirket Bilgileri</li>
                    <li>Muhasebe Bilgileri</li>
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

export default CompanyPanel;