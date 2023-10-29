import React, { useState } from 'react';

function CompanyRegister() {
  const [username, setUsername] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [companyConfirmPassword, setCompanyConfirmPassword] = useState('');
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

  const handleCompanyEmailChange = (e) => {
    setCompanyEmail(e.target.value);
  };

  const handleCompanyAddressChange = (e) => {
    setCompanyAddress(e.target.value);
  };

  const handleCompanyPhoneNumberChange = (e) => {
    setCompanyPhoneNumber(e.target.value);
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
      const newCompanyData = {
        username,
        companyName,
        taxNumber,
        email: companyEmail,
        address: companyAddress,
        phone: companyPhoneNumber,
        password: companyPassword,
      };

      try {
        const response = await fetch('http://localhost:9090/register-company', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCompanyData),
        });

        if (response.ok) {
          setError('Şirket kaydı başarıyla tamamlandı.');
        }
      } catch (error) {
        console.error('Kayıt hatası:', error);
        setError('Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyiniz.');
      }
    }
  };


  return (
    <div className="company-registration">
      <h2>Şirket Yöneticisi Kaydı</h2>
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
          value={companyEmail}
          onChange={handleCompanyEmailChange}
        />
        <input
          type="text"
          placeholder="Şirket Adresi"
          value={companyAddress}
          onChange={handleCompanyAddressChange}
        />
        <input
          type="text"
          placeholder="Şirket Telefonu"
          value={companyPhoneNumber}
          onChange={handleCompanyPhoneNumberChange}
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
    </div>
  );
}

export default CompanyRegister;
