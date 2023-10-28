/* src/pages/GuestPanel.js */

import React from 'react';
import './styles/Panel.scss'; 

function GuestPanel() {
  return (
    <div className="panel">
      <div className="menu">
        <ul>
          <li>Ziyaretçi Paneli</li>
          <li>Kullanıcı Bilgileri</li>
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

export default GuestPanel;
