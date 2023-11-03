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

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    } catch (error) {
      return null;
    }
  };

  const handleLogin = async () => {
    try {
      const loginData = { username, password };
      const response = await fetch('http://localhost:9090/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const tokenData = await response.text();

        const decodedToken = parseJwt(tokenData);

        if (decodedToken) {
          const userRole = decodedToken.role;
          console.log(userRole);
          const userId = decodedToken.userId;
          console.log('userId:', userId);


          // Kullanıcı rolüne göre yönlendirme
          switch (userRole) {
            case 'ADMIN':
              navigate('/admin-panel');
              break;
            case 'COMPANY':
              navigate('/company-panel');
              break;
            case 'GUEST':
              navigate(`/guest-panel/${userId}`);
              break;
            default:
              setError('Geçersiz kullanıcı rolü.');
              break;
          }
        } else {
          setError('JWT token çözülemedi veya kullanıcı rolü bulunamadı.');
        }
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
