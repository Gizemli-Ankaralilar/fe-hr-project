import React, { useState, useEffect } from 'react';

function UserManagement({ userId }) {
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
            <h3 style={{ textAlign: "center" }}>Şirket Yönetimi</h3>
            <p>Giriş Yapan Şirket Yöneticisi Adı: {userInfo.username}</p>
            <fieldset>
                <legend>Şirket Ayarları</legend>
                <form>
                    <label htmlFor="userPhoto">User Photo: </label>
                    <br />
                    <input id="userPhoto" type="text" name="image" placeholder="Enter Your User Photo URL..." />
                    <br />
                    <label htmlFor="username">Username: </label>
                    <input id="username" type="text" name="name1" placeholder="Enter Your Username..." />
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email" name="name2" placeholder="Enter Your E-mail..." />
                    <br />
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" name="name3" placeholder="Enter Your Password..." />
                    <br />
                    <label htmlFor="firstName">First Name: </label>
                    <input id="firstName" type="text" name="name4" placeholder="Enter Your First Name..." />
                    <br />
                    <label htmlFor="lastName">Last Name: </label>
                    <input id="lastName" type="text" name="name5" placeholder="Enter Your Last Name..." />
                    <br />
                    <label htmlFor="phoneNumber">Phone Number: </label>
                    <input id="phoneNumber" type="tel" name="name6" placeholder="Enter Your Phone Number..." />
                    <br />
                    <label htmlFor="address">Address: </label>
                    <input id="address" type="text" name="name7" placeholder="Enter Your Address..." />
                    <br />
                    <label>Field of Work: <select name="select1">
                        <option value="value1">Arge</option>
                        <option value="value2">Maintenance</option>
                        <option value="value3">Store</option>
                        <option value="value4">İdare</option>
                        <option value="value5">Human Resources</option>
                        <option value="value6">Accountancy</option>
                        <option value="value7">Manufacture</option>
                        <option value="value8">Other...</option>
                    </select>
                    </label>
                    <br />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        </div>
    );
}

export default UserManagement;
