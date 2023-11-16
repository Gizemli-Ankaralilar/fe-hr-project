// CompanyActivation.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CompanyActivation.scss';
import jwt from 'jsonwebtoken'; // token oluşturmak için jsonwebtoken kütüphanesini ekliyoruz


const CompanyActivation = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    // Admin Kimlik Doğrulaması
    const token = localStorage.getItem('token');
    const decodedToken = parseJwt(tokenData);
    if (decodedToken) {
        const userRole = decodedToken.role;
        console.log(userRole);
        if(userRole==="ADMIN"){
            const userId = decodedToken.userId;
            console.log('userId:', userId);
        } else {
            setError("kanka sen admin değilsin kusura bakma. sen git adminin gelsin. ")
        }
    } else {
        setError("token'da bir sıkıntı var çözülemedi. ");
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:9090/api/v1/auth/find_all');
                setData(response.data);
            } catch (error) {
                console.error('Veri çekme hatası:', error);
            }
        };

        fetchData();
    }, []);

    const filteredData = data.filter(item => item.status === 'PENDING' && item.role === 'COMPANY_OWNER');


    const handleApprove = async (id) => {
        try {
            // Backend'e gönderilecek token'ı oluştur
            const tokenPayload = {
                AdminId: userId,
                ApprovationId: id
            };

            // jsonwebtoken kullanarak token oluştur
            const newToken = jwt.sign(tokenPayload, 'your-secret-key');

            // Backend ile iletişim için axios kullan
            const response = await axios.get(`http://localhost:9090/api/v1/auth/activate_company_status?token=${newToken}`);

            // Başarılı cevap durumunda state'i güncelle
            setData(prevData => prevData.map(item => (item.id === id ? { ...item, status: 'APPROVED' } : item)));
        } catch (error) {
            console.error('Onaylama hatası:', error);
        }
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Kullanıcı Adı</th>
                    <th>E-Posta</th>
                    <th>Onay Durumu</th>
                    <th>Kullanıcı Rolü</th>
                    <th>Onayla</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.status}</td>
                        <td>{item.role}</td>
                        <td>
                            <button onClick={() => handleApprove(item.id)}>Onayla</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompanyActivation;
