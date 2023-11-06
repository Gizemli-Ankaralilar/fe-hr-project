import React, { useState, useEffect } from 'react';

function SirketYoneticisiOnaylari({ userId }) {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        // Fetch user information from the server
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
            <h3 style={{ textAlign: "center" }}>Yorum Ekranı</h3>
            <p>Giriş Yapan Admin Adı: {userInfo.username}</p>
            <fieldset>
                <legend>Onay Ekranı</legend>
                <form>
                    <image>
                        <label htmlFor="nameId1">Şirket Logosu: </label>
                        <br />
                        <input id="nameId1" type="image" name="image" placeholder="Enter Your Username..."/>
                    </image>
                    <br />
                    <label htmlFor="nameId1">Şirket Adı: </label>
                    <input id="nameId1" type="text" name="name1"/>
                    <br />
                    <label htmlFor="nameId1">Şirket Yöneticisi Kullanıcı Adı: </label>
                    <input id="nameId1" type="text" name="name1"/>
                    <br />
                    <label htmlFor="nameId1">Şirket Yöneticisi Adı: </label>
                    <input id="nameId1" type="text" name="name1"/>
                    <br />
                    <label htmlFor="nameId1">Şirket Yöneticisi Soyadı: </label>
                    <input id="nameId1" type="text" name="name1"/>
                    <br />
                    <label htmlFor="nameId1">Şirket Yöneticisi Email: </label>
                    <input id="nameId1" type="email" name="name1"/>
                    <br />
                    <button type="submit">Kaydet</button>
                </form>
            </fieldset>

        </div>
    );
}

export default SirketYoneticisiOnaylari;
