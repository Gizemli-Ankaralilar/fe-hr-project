// UserInformation.js
import React, { useState, useEffect } from 'react';

function Settings({ userId }) {
    const [userInfo, setUserInfo] = useState({});



    useEffect(() => {
        // Sunucudan kullanıcı bilgilerini almak için bir fetch isteği yapın
        fetch(`http://localhost:9094/api/v1/user/${userId}/information`)
            .then((response) => response.json())
            .then((data) => {
                setUserInfo(data);
            })
            .catch((error) => {
                console.error('Kullanıcı bilgi alma hatası:', error);
            });
    }, [userId]);

    return (
        <div>
            <p>Giriş Yapan Kullanıcı Adı: {userInfo.username}</p>
            <fieldset>
                <legend>Kullanıcı Ayarları</legend>
                <form>


                    <button type="">Submit</button>
                </form>
            </fieldset>
        </div>
    );
}

export default Settings;
