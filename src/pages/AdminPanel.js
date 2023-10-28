/* src/pages/AdminPanel.js */

import React from 'react';
import './styles/Panel.scss';

function AdminPanel() {
  return (
    <div className="panel">
      <div className="menu">
        <ul>
          <li>Admin Paneli</li>     
          <li>Kullanıcı Yönetimi</li>
          <li>Şirket Yönetimi</li>
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

export default AdminPanel;
