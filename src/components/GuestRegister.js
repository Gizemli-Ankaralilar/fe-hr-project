import React, { useState } from 'react';

function GuestRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
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

  const handleRegister = async () => {
    if (username.trim() === '') {
      setError('Kullanıcı adı boş olamaz. Lütfen doldurun.');
    } else if (email.trim() === '') {
      setError('E-Posta boş olamaz. Lütfen doldurun.');
    } else if (password.trim() === '') {
      setError('Şifre girmediniz. Lütfen bir şifre belirleyin.');
    } else if (password !== confirmPassword) {
      setError('Şifreler uyuşmuyor. Lütfen tekrar deneyiniz.');
    } else {
      const newUserData = {
        username,
        email,
        password: password,
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
        } else if (response.status === 400) {
        const errorData = await response.json();
        if (errorData.message) {
          setError(errorData.message);
        } else {
          setError('Bilinmeyen bir hata oluştu.');
        }
      } else {
        setError('Çok Enteresan bir hata oldu. Acayip Bir Hata. Çok Üst Düzey Bir Hata. Bu Hata Bizi Aşar. Bu Hata Bizi Bitirir. Ne yaptın sen böyle?');
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
        <button onClick={handleRegister}>Kayıt İşlemini Tamamla</button>
        {error && <p>{error}</p>}
      </div>
  );
}

export default GuestRegister;