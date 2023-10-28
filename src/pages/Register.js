import React, { useState } from 'react';
import './styles/Register.scss';

function Register() {
  const [activeTab, setActiveTab] = useState('user');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [companyConfirmPassword, setCompanyConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleTaxNumberChange = (e) => {
    setTaxNumber(e.target.value);
  };

  const handleCompanyEmailChange = (e) => {
    setCompanyEmail(e.target.value);
  };

  const handleCompanyPasswordChange = (e) => {
    setCompanyPassword(e.target.value);
  };

  const handleCompanyConfirmPasswordChange = (e) => {
    setCompanyConfirmPassword(e.target.value);
  };

  const handleUserRegister = async () => {
    if (password !== confirmPassword) {
      setError('Şifreler uyuşmuyor. Lütfen tekrar deneyiniz.');
    } else {
      const newUser = {
        fullName,
        email,
        password,
      };
      try {
        const response = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });
        if (response.ok) {
          alert('Kullanıcı kaydı başarıyla tamamlandı.');
        } else {
          setError('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyiniz.');
        }
      } catch (error) {
        console.error('Kayıt hatası:', error);
        setError('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyiniz.');
      }
    }
  };

  const handleCompanyRegister = async () => {
    if (companyPassword !== companyConfirmPassword) {
      setError('Şifreler uyuşmuyor. Lütfen tekrar deneyiniz.');
    } else {
      const newCompany = {
        fullName,
        companyName,
        taxNumber,
        email: companyEmail,
        password: companyPassword,
      };
      try {
        const response = await fetch('http://localhost:5000/companies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCompany),
        });
        if (response.ok) {
          alert('Şirket kaydı başarıyla tamamlandı.');
        } else {
          setError('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyiniz.');
        }
      } catch (error) {
        console.error('Kayıt hatası:', error);
        setError('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyiniz.');
      }
    }
  };

  return (
    <div className="register-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'user' ? 'active' : ''}`}
          onClick={() => handleTabChange('user')}
        >
          Ziyaretçi Kaydı
        </button>
        <button
          className={`tab ${activeTab === 'company' ? 'active' : ''}`}
          onClick={() => handleTabChange('company')}
        >
          Şirket Yöneticisi Kaydı
        </button>
      </div>
      {activeTab === 'user' ? (
        <div className="user-registration">
          <h2>Ziyaretçi Kaydı</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="İsim ve Soyisim"
              value={fullName}
              onChange={handleFullNameChange}
            />
            <input
              type="email"
              placeholder="E-Posta"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              type="password"
              placeholder="Şifre Tekrar"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <button onClick={handleUserRegister}>Ziyaretçi Kaydı Yap</button>
        </div>
      ) : (
        <div className="company-registration">
          <h2>Şirket Yöneticisi Kaydı</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="İsim ve Soyisim"
              value={fullName}
              onChange={handleFullNameChange}
            />
            <input
              type="text"
              placeholder="Şirket Adı"
              value={companyName}
              onChange={handleCompanyNameChange}
            />
            <input
              type="text"
              placeholder="Vergi Numarası"
              value={taxNumber}
              onChange={handleTaxNumberChange}
            />
            <input
              type="email"
              placeholder="E-Posta"
              value={companyEmail}
              onChange={handleCompanyEmailChange}
            />
            <input
              type="password"
              placeholder="Şifre"
              value={companyPassword}
              onChange={handleCompanyPasswordChange}
            />
            <input
              type="password"
              placeholder="Şifre Tekrar"
              value={companyConfirmPassword}
              onChange={handleCompanyConfirmPasswordChange}
            />
          </div>
          <button onClick={handleCompanyRegister}>Şirket Yöneticisi Kaydı Yap</button>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Register;
