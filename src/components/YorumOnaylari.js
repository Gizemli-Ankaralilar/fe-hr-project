import React, { useState, useEffect } from 'react';

function YorumOnaylari({ userId }) {
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
            <h3 style={{ textAlign: "center" }}>Yorum Onayı</h3>
            <p>Giriş Yapan Personel Adı: {userInfo.username}</p>
            <fieldset>
                <legend>Yorum Ekranı</legend>
                <form>
                    <label htmlFor="nameId1">Şirket Adı: </label>
                    <input id="nameId1" type="text" name="name1"/>
                    <br />
                    <label htmlFor="nameId1">Şirket Personeli Adı: </label>
                    <input id="nameId1" type="text" name="name1"/>
                    <br />
                    <label
                    >Yorum: <br/><textarea name="textarea4" ></textarea>
                    </label>
                    <br />
                    <br />
                    <button type="submit">Kaydet</button>
                </form>
            </fieldset>

        </div>
    );
}

export default YorumOnaylari;
