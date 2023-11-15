// src/components/PersonelAdd.js

import React, { useState, useEffect } from 'react';
import { saveWorker } from '../services/api'; // Dizin yapısına ve dosya adına göre güncellenmeli
import './WorkerAdd.scss';

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
        <div className="page-container">
            <div className="personeladd-container">
                <h3>Personel Ekleme Formu:</h3>
                <p>Giriş Yapan Yönetici Adı: {companyInfo.username}</p>
                <div className="form-container">
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Kullanıcı Adı"
                            id="username"
                            name="username"
                            value={workerData.username}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="İsim"
                            id="firstName"
                            name="firstName"
                            value={workerData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Soyisim"
                            id="lastName"
                            name="lastName"
                            value={workerData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={workerData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="tel"
                            placeholder="Telefon"
                            id="phone"
                            name="phone"
                            value={workerData.phone}
                            onChange={handleInputChange}
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Adres"
                            id="address"
                            name="address"
                            value={workerData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="button-container">
                        <button onClick={handleWorkerSubmit}>Personel Ekle</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonelAdd;
