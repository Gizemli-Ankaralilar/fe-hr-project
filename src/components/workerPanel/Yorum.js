// src/components/Yorum.js

import React, { useState, useEffect } from 'react';

function Yorum({ userId }) {
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
            <p>Giriş Yapan Personel Adı: {userInfo.username}</p>
            <fieldset>
                <legend>Yorum Ekranı</legend>
                <form>
                    <image>
                        <label htmlFor="nameId1">Şirket Logosu: </label>
                        <br />
                        <input id="nameId1" type="image" name="image" placeholder="Enter Your Username..."/>
                    </image>
                    <br />
                    <label htmlFor="nameId1">Company Name: </label>
                    <input id="nameId1" type="text" name="name1"/>
                    <br />
                    <label
                    >Comment: <br/><textarea name="textarea4" ></textarea>
                    </label>
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </fieldset>

        </div>
    );
}

export default Yorum;
