import React, { useState, useEffect } from 'react';

function CompanyInformation({ userId }) {
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
            <h3 style={{ textAlign: "center" }}>Şirket Bilgileri</h3>
            <p>Giriş Yapan Personel Adı: {userInfo.username}</p>
            <fieldset>
                <legend>Şirket Bilgileri</legend>
                <form>
                    <image>
                        <label htmlFor="nameId1">Company Logo: </label>
                        <br />
                        <input id="nameId0" type="text" name="image"/>
                    </image>
                    <br />
                    <label htmlFor="nameId1">Company Name: </label>
                    <input id="nameId1" type="text" name="name1" placeholder="Enter Your Company Name..."/>
                    <br />
                    <label htmlFor="nameId2">Username: </label>
                    <input id="nameId2" type="text" name="name2" placeholder="Enter Your Username..."/>
                    <br />
                    <label htmlFor="nameId3">Email: </label>
                    <input id="nameId3" type="email" name="name3" placeholder="Enter Your E-mail..."/>
                    <br />
                    <label htmlFor="nameI4">Pasword: </label>
                    <input id="nameId4" type="password" name="name4" placeholder="Enter Your Password..."/>
                    <br />
                    <label htmlFor="nameId5">Tax Number: </label>
                    <input id="nameId5" type="text" name="name5" placeholder="Enter Your Tax Number..."/>
                    <br />
                    <label htmlFor="nameId6">Company Email: </label>
                    <input id="nameId6" type="email" name="name6" placeholder="Enter Your E-mail..."/>
                    <br />
                    <label htmlFor="nameId5">Company Address: </label>
                    <input id="nameId7" type="text" name="name7" placeholder="Enter Your Company Address..."/>
                    <br />
                    <label htmlFor="nameId8">Company Phone Number: </label>
                    <input id="nameId8" type="tel" name="name8" placeholder="Enter Your Company Phone Number..."/>
                    <br />
                    <label htmlFor="nameId9">Activation Code: </label>
                    <input id="nameId9" type="text" name="name9" placeholder="Enter Your Activation Code..."/>
                    <br />
                    <label>Workers:<br/><textarea name="textarea1"></textarea>
                    </label>
                    <br />
                    <label
                    >Finances:<br/><textarea name="textarea2" ></textarea>
                    </label>
                    <br />
                    <label
                    >Permissions:<br/><textarea name="textarea3"></textarea>
                    </label>
                    <br />
                    <label
                    >Comments: <br/><textarea name="textarea4" ></textarea>
                    </label>
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </fieldset>

        </div>
    );
}

export default CompanyInformation;
