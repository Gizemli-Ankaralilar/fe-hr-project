import React, { useState } from 'react';
import './styles/Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const loginData = { username, password };
      const response = await fetch('http://localhost:9090/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const userData = await response.json();

        // Burada kullanıcıyı ve rolünü kontrol edebilirsiniz
        if (userData.username === 'admin') {
          navigate('/admin-panel');
        } else if (userData.username.startsWith('company')) {
          navigate('/company-panel');
        } else if (userData.username.startsWith('user')) {
          navigate('/guest-panel');
        }
      } else {
        setError('Kullanıcı adı veya şifre hatalı. Lütfen tekrar deneyiniz.');
      }
    } catch (error) {
      console.error('Giriş hatası:', error);
      setError('Giriş sırasında bir hata oluştu. Lütfen tekrar deneyiniz.');
    }
  };

  return (
    <div className="login-container">
      <h2>Kullanıcı Girişi</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Giriş Yap</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
