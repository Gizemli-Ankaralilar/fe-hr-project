import React, { useState } from 'react';
import './styles/Register.scss';
import GuestRegister from '../components/GuestRegister';
import CompanyRegister from '../components/CompanyRegister';
import { registerUser } from '../services/api'; // Api.js'den registerUser'ı içe aktar

function Register() {
  const [activeTab, setActiveTab] = useState('guest');
  const [error, setError] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleRegister = async (data) => {
    try {
      const response = await registerUser(data); // registerUser fonksiyonunu kullan

      if (response.ok) {
        if (data.type === 'guest') {
          alert('Ziyaretçi kaydı başarıyla tamamlandı.');
        } else if (data.type === 'company') {
          alert('Şirket kaydı başarıyla tamamlandı.');
        }
      } else if (response.status === 400) {
        const errorData = await response.json();
        if (errorData.message) {
          setError(errorData.message);
        } else {
          setError('Bilinmeyen bir hata oluştu.');
        }
      } else {
        setError('Çok Enteresan bir hata oldu. ' +
            'Acayip Bir Hata. Çok Üst Düzey Bir Hata. ' +
            'Bu Hata Bizi Aşar. ' +
            'Bu Hata Bizi Bitirir. ' +
            'Ne yaptın sen böyle?');
      }
    } catch (error) {
      console.error('Kayıt hatası:', error);
      setError('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyiniz.');
    }
  };

  return (
    <div className="register-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'guest' ? 'active' : ''}`}
          onClick={() => handleTabChange('guest')}
        >
          Ziyaretçi
        </button>
        <button
          className={`tab ${activeTab === 'company' ? 'active' : ''}`}
          onClick={() => handleTabChange('company')}
        >
          Şirket
        </button>
      </div>
      {activeTab === 'guest' ? (
        <GuestRegister onRegister={handleRegister} />
      ) : (
        <CompanyRegister onRegister={handleRegister} />
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Register;
