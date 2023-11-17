// src/components/companyPanel/CompanyInformation.js

import React, { useState, useEffect } from 'react';
import './CompanyInformation.scss';

function CompanyInformation() {
    const [companyInfo, setCompanyInfo] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);

    const loginToken = localStorage.getItem("loginToken")
    const userId = localStorage.getItem("loggedUserId")
    const userRole = localStorage.getItem("loggedUserRole")

    useEffect(() => {

        fetch(`http://localhost:9091/api/v1/company/get_company_information?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setCompanyInfo(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Şirket bilgi alma hatası:', error);
                setLoading(false);
            });
    }, []);

    const handleEditClick = () => {
        setEditMode(!editMode);
    };

    const handleSaveClick = () => {
        // Implement the logic to save edited information to the server
        // You can use fetch or any other method here
        setEditMode(false);
    };

    return (
        <div className="company-information-container">
            {loading ? (
                <p>Loading...</p>
            ) : editMode ? (
                <div className="company-information-form">
                    <h3 style={{ textAlign: 'center' }}>Şirket Bilgilerini Düzenle</h3>
                    <form>
                        {/* Include the form fields here */}
                        <button type="button" onClick={handleSaveClick}>
                            Bilgileri Kaydet
                        </button>
                    </form>
                </div>
            ) : (
                <div className="company-information-card">
                    <h3 style={{ textAlign: 'center' }}>Şirket Bilgileri</h3>
                    <img src={companyInfo.logo} alt="Company Logo" />
                    <p>Giriş Yapan Personel Adı: {companyInfo.username}</p>
                    <p>Şirket Adı: {companyInfo.companyName}</p>
                    <p>Adres: {companyInfo.address}</p>
                    <p>Vergi Numarası: {companyInfo.taxNumber}</p>
                    {/* Diğer bilgileri ekleyin */}
                    <button type="button" onClick={handleEditClick}>
                        Şirket Bilgilerini Düzenle
                    </button>
                </div>
            )}
        </div>
    );
}

export default CompanyInformation;

