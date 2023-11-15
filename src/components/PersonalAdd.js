// src/components/PersonelAdd.js

import React, { useState, useEffect } from 'react';
import { saveWorker } from '../services/api'; // Dizin yapısına ve dosya adına göre güncellenmeli
import './PersonalAdd.scss';

function PersonelAdd({ companyId }) {
    const [companyInfo, setCompanyInfo] = useState({});
    const [workerData, setWorkerData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    });

    useEffect(() => {
        // Fetch company information from the server
        fetch(`http://localhost:9091/api/v1/company/save/worker`)
            .then((response) => response.json())
            .then((data) => {
                setCompanyInfo(data);
            })
            .catch((error) => {
                console.error('Şirket bilgi alma hatası:', error);
            });
    }, [companyId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWorkerData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleWorkerSubmit = (e) => {
        e.preventDefault();

        // localStorage'ten token'ı al
        const token = localStorage.getItem('token');

        // Eğer token yoksa, kullanıcıyı giriş sayfasına yönlendir
        if (!token) {
            // Örneğin, react-router-dom'un useNavigate fonksiyonu ile yönlendirme yapabilirsiniz.
            // useNavigate('/login'); gibi bir kullanım düşünülebilir.
            return;
        }

        // Önce kullanıcının girdiği bilgileri state'ten alalım
        const { username, firstName, lastName, email, phone, address } = workerData;



        // Oluşturduğumuz bilgileri bir nesne içinde toplayalım
        const workerDataForApi = {
            username,
            firstName,
            lastName,
            email,
            phone,
            address,
        };

        // Şimdi bu bilgileri servis fonksiyonuna gönderelim
        saveWorker(token, workerData)
            .then((response) => {
                console.log(response.data);
                // Başarılı yanıtın işlenmesi
            })
            .catch((error) => {
                console.error('Çalışan ekleme hatası:', error);
            });
    };


    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Şirket Yönetimi</h3>
            <p>Giriş Yapan Yönetici Adı: {companyInfo.username}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <fieldset style={{ flex: 1 }}>
                    <legend>Personel Sayfasına Geçiş</legend>
                    <form>
                        <br />
                        <button type="submit">Personel Sayfasına Geçiş</button>
                    </form>
                </fieldset>
                <fieldset style={{ flex: 1 }}>
                    <legend>Personel Ekleme:</legend>
                    <form onSubmit={handleWorkerSubmit}>
                        <label htmlFor="username">Kullanıcı Adı:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={workerData.username}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <label htmlFor="firstName">İsim:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={workerData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <label htmlFor="lastName">Soyisim:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={workerData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={workerData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <label htmlFor="phone">Telefon:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={workerData.phone}
                            onChange={handleInputChange}
                        />
                        <br />
                        <label htmlFor="address">Adres:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={workerData.address}
                            onChange={handleInputChange}
                        />
                        <br />
                        <button type="submit">Personel Ekle</button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
}

export default PersonelAdd;
