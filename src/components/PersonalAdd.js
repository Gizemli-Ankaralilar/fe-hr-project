// PersonalAdd.js
import React, { useState, useEffect } from 'react';

function PersonelAdd({ companyId }) {
    const [companyInfo, setCompanyInfo] = useState({});
    const [resmiTatilBilgileri, setResmiTatilBilgileri] = useState('');

    useEffect(() => {
        // Fetch company information from the server
        fetch(`http://localhost:9094/api/v1/company/${companyId}/information`)
            .then((response) => response.json())
            .then((data) => {
                setCompanyInfo(data);
            })
            .catch((error) => {
                console.error('Şirket bilgi alma hatası:', error);
            });
    }, [companyId]);

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Şirket Yönetimi</h3>
            <p>Giriş Yapan Yönetici Adı: {companyInfo.username}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <fieldset style={{ flex: 1 }}>
                    <legend>Personel Sayfasına Geçiş</legend>
                    <form>
                        <br/>
                        <button type="submit">Personel Sayfasına Geçiş</button>
                    </form>
                </fieldset>
                <fieldset style={{ flex: 1}}>
                    <legend>Personel Ekleme:</legend>
                    <form>
                        <label htmlFor="nameId2">Email: </label>
                        <input id="nameId2" type="email" name="name2" placeholder="Enter Your E-mail..."/>
                        <br />
                        <br />
                        <button type="submit">Personel Ekle</button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
}

export default PersonelAdd;

