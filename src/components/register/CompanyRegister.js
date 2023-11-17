import React, { useState } from 'react';

function CompanyRegister({ onLogin }) {
  const [username, setUsername] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleTaxNumberChange = (e) => {
    setTaxNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
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
    } else if (companyName.trim() === '') {
      setError('Şirket adı boş olamaz. Lütfen doldurun.');
    } else if (taxNumber.trim() === '') {
      setError('Vergi numarası boş olamaz. Lütfen doldurun.');
    } else if (email.trim() === '') {
      setError('Şirket e-posta boş olamaz. Lütfen doldurun.');
    } else if (password.trim() === '') {
      setError('Şifre girmediniz. Lütfen bir şifre belirleyin.');
    } else if (password !== confirmPassword) {
      setError('Şifreler uyuşmuyor. Lütfen tekrar deneyiniz.');
    } else {
      const newCompanyData = {
        username,
        companyName,
        taxNumber,
        email: email,
        address: address,
        phone: phoneNumber,
        password: password,
      };

      try {
        const response = await fetch('http://localhost:9090/api/v1/auth/company-register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCompanyData),
        });
        if (response.ok) {
          setError('Ön kaydınız oluşturuldu.');
          setError('Admin onayı bekleniyor.');
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

  const handleLogin = () => {
    if (onLogin) {
      onLogin(); // Trigger the onLogin function to handle navigation to the login page
    }
  };

  return (
      <div className="company-registration">
        <h2>Şirket Yöneticisi Kaydı</h2>
        <div className="form-container">
          <div className="input-container">
            <input
                type="text"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={handleUsernameChange}
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
                placeholder="Şirket E-posta"
                value={email}
                onChange={handleEmailChange}
            />
            <input
                type="text"
                placeholder="Şirket Adresi"
                value={address}
                onChange={handleAddressChange}
            />
            <input
                type="text"
                placeholder="Şirket Telefonu"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
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
          <div className="button-container">
            <button onClick={handleRegister}>Kayıt İşlemini Tamamla</button>
            <button onClick={handleLogin}>Giriş Yap</button>
          </div>
        </div>
        {error && <p>{error}</p>}
      </div>
  );
}

export default CompanyRegister;
