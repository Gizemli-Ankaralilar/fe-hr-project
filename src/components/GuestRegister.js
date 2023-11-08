import React, { useState } from 'react';

function GuestRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [companyConfirmPassword, setCompanyConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCompanyPasswordChange = (e) => {
    setCompanyPassword(e.target.value);
  };

  const handleCompanyConfirmPasswordChange = (e) => {
    setCompanyConfirmPassword(e.target.value);
  };

  const handleRegister = async () => {
    if (companyPassword !== companyConfirmPassword) {
      setError('Şifreler uyuşmuyor. Lütfen tekrar deneyiniz.');
    } else {
      const newUserData = {
        username,
        email,
        password: companyPassword,
      };

      try {
        const response = await fetch('http://localhost:9090/api/v1/auth/visitor-register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUserData),
        });
        if (response.ok) {
          setError('Onay Link Mailinize Gönderildi.');
        }
      } catch (error) {
        console.error('Kayıt hatası:', error);
        setError('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyiniz.');
      }
    }
  };

  return (
      <div className="guest-registration">
        <h2>Ziyaretçi Kaydı</h2>
        <div className="input-container">
          <input
              type="text"
              placeholder="Kullanıcı Adı"
              value={username}
              onChange={handleUsernameChange}
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
        <button onClick={handleRegister}>Kayıt İşlemini Tamamla</button>
        {error && <p>{error}</p>}
      </div>
  );
}

export default GuestRegister;
