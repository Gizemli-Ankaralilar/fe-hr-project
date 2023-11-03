// UserInformation.js
import React, { useState, useEffect } from 'react';

function UserInformation({ userId }) {
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
            <h3>Kullanıcı Bilgileri</h3>
            <p>Kullanıcı Adı: {userInfo.username}</p>
            <fieldset>
                <legend>Kullanıcı Bilgileri</legend>
                <form>
                    <image>
                        <label htmlFor="nameId1">User Photo: </label>
                        <br />
                        <input id="nameId1" type="image" name="image" placeholder="Enter Your Username..."/>
                    </image>
                    <br />
                    <label htmlFor="nameId1">Username: </label>
                    <input id="nameId1" type="text" name="name1" placeholder="Enter Your Username..."/>
                    <br />
                    <label htmlFor="nameId2">Email: </label>
                    <input id="nameId2" type="email" name="name2" placeholder="Enter Your E-mail..."/>
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
                    <label>Field of Works: <select name="select1">
                        <option value="value1">Arge</option>
                        <option value="value2">Maintenance</option>
                        <option value="value3">Store</option>
                        <option value="value4">İdare</option>
                        <option value="value5">Human Resources</option>
                        <option value="value6">Accountancy</option>
                        <option value="value7">Manufacture</option>
                        <option value="value7">Other...</option>
                    </select>
                    </label>
                    <br />
                    <label>Permission: <select name="select2">
                        <option value="value1">No Leave</option>
                        <option value="value2">Annual Leave</option>
                        <option value="value3">Motherhood Leave</option>
                        <option value="value4">Paternity Leave</option>
                        <option value="value5">Pregnancy Leave </option>
                        <option value="value6">Sick Leave</option>
                        <option value="value7">Unpaid Leave</option>
                    </select>
                    </label>
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        </div>
    );
}

export default UserInformation;