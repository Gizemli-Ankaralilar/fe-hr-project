// src/components/CompanyManagement.js

import React, { useState, useEffect } from 'react';

function CompanyManagement({ companyId }) {
    const [companyInfo, setCompanyInfo] = useState({});

    useEffect(() => {
        // Sunucudan şirket bilgilerini almak için bir fetch isteği yapın
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
            <p>Şirket Adı: {companyInfo.username}</p>
            <fieldset>
                <legend>Şirket Yönetimi</legend>
                <form>
                    <label htmlFor="companyLogo">Company Logo: </label>
                    <br />
                    <input id="companyLogo" type="text" name="image" placeholder="Enter Your Company Logo URL..." />
                    <br />
                    <label htmlFor="companyName">Company Name: </label>
                    <input id="companyName" type="text" name="name1" placeholder="Enter Your Company Name..." />
                    <br />
                    <label htmlFor="companyEmail">Company Email: </label>
                    <input id="companyEmail" type="email" name="name2" placeholder="Enter Your Company Email..." />
                    <br />
                    {/* Diğer şirket ayarlarını ekleyin */}
                    <br />
                    <label htmlFor="companyLogo">Rol Değistirmek: </label>
                    <button type="submit">Personel Role</button>
                </form>
            </fieldset>
        </div>
    );
}

export default CompanyManagement;
