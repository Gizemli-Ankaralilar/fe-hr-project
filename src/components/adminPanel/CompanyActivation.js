// CompanyActivation.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createJWT, parseJWT } from '../../services/jwtManager';

import './CompanyActivation.scss';

const CompanyActivation = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [userRole, setUserRole] = useState(null);

    // Admin Kimlik Doğrulaması
    const loginToken = localStorage.getItem('loginToken');
    const decodedLoginToken = parseJWT(loginToken);

    useEffect(() => {
        if (decodedLoginToken) {
            const role = decodedLoginToken.role;
            if (role === 'ADMIN') {
                setUserRole(role);
            } else {
                setError("kanka sen admin değilsin kusura bakma. sen git adminin gelsin. ");
            }
        } else {
            setError("token'da bir sıkıntı var çözülemedi. ");
        }
    }, [decodedLoginToken]);

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
        if (userRole === "ADMIN") {
            try {
                // createJWT fonksiyonunu kullanarak token oluştur
                const newToken = await createJWT(id, userRole);

                const sendToken = async (token) => {
                    try {
                        const response = await fetch(`http://localhost:9090/api/v1/auth/activate_company_status?token=${token}`);

                        if (response.status === 200) {
                            console.log("İşlem başarılı");
                        } else {
                            console.log("İşlem başarısız");
                        }

                    } catch (error) {
                        console.error('Token gönderilemedi:', error);
                    }
                };

                sendToken(newToken);

            } catch (error) {
                console.error('Token oluşturulamadı.:', error);
            }
        } else {
            alert("BUTONA BASAN ADMİN DEĞİL.");
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
