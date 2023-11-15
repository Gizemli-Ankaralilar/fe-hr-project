// src/components/GuestInformation.js

import React, { useState, useEffect } from 'react';

function GuestInformation({ userId }) {
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
            <h3 style={{ textAlign: "center" }}>Ziyaretçi Sayfası</h3>
            <p>Giriş Yapan Ziyaretçi Adı: {userInfo.username}</p>
            <fieldset>
                <legend>Ziyaretçi Bilgileri</legend>
                <form>
                    <image>
                        <label htmlFor="nameId1">Ziyaretçi Fotoğraf: </label>
                        <br />
                        <input id="nameId1" type="image" name="image" placeholder="Enter Your Username..."/>
                    </image>
                    <br />
                    <label htmlFor="nameId1">Username: </label>
                    <input id="nameId1" type="text" name="name1" placeholder="Enter Your Username..."/>
                    <br />
                    <label htmlFor="nameId2">Email: </label>
                    <input id="nameId2" type="email" name= "name2" placeholder="Enter Your E-mail..."/>
                    <br />
                    <label htmlFor="nameI3">Pasword: </label>
                    <input id="nameId3" type="password" name="name3" placeholder="Enter Your Password..."/>
                    <br />
                    <label htmlFor="nameId4">First Name: </label>
                    <input id="nameId4" type="text" name="name4" placeholder="Enter Your First Name..."/>
                    <br />
                    <label htmlFor="nameId5">Last Name: </label>
                    <input id="nameId5" type="text" name="name5" placeholder="Enter Your Last Name..."/>
                    <br />
                    <label htmlFor="nameId6">Phone Number: </label>
                    <input id="nameId6" type="tel" name="name6" placeholder="Enter Your Phone Number..."/>
                    <br />
                    <label htmlFor="nameId1">Address: </label>
                    <input id="nameId7" type="text" name="name7" placeholder="Enter Your Address..."/>
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        </div>
    );
}

export default GuestInformation;
