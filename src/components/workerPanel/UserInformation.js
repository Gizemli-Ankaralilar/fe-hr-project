// src/components/UserInformatin.js

import React, { useState, useEffect } from 'react';

function UserInformation({ companyId }) {
    const [companyInfo, setCompanyInfo] = useState({});
    const [resmiTatilBilgileri, setResmiTatilBilgileri] = useState('');
    const [SirketIkBilgileri, setSirketIkBilgileri] = useState('');

    useEffect(() => {
        // Fetch company information from the server
        fetch(`http://localhost:9094/api/v1/company/${companyId}/information`)
            .then((response) => response.json())
            .then((data) => {
                setCompanyInfo(data);
            })
            .catch((error) => {
                console.error('Şirket bilgi alma hatası:', error);
            });
        const resmiTatilBilgileri = `Şirket Resmi Tatil Bilgileri:
- Yılbaşı: 1 Ocak 2024 Pazartesi
- Yarıyıl Tatili: 22 Ocak Pazartesi – 4 Şubat Pazar
- Ramazan Bayramı Arife (yarım gün): 9 Nisan 2024 Salı
- Ramazan Bayramı 1.Gün: 10 Nisan 2024 Çarşamba
- Ramazan Bayramı 2.Gün: 11 Nisan 2024 Perşembe
- Ramazan Bayramı 3.Gün: 12 Nisan 2024 Cuma
- 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı: 23 Nisan Salı
- 1 Mayıs Emek ve Dayanışma Günü: 1 Mayıs Çarşamba
- 19 Mayıs Atatürk’ü Anma, Gençlik ve Spor Bayramı: 19 Mayıs Pazar
- Kurban Bayramı Arife (yarım gün): 15 Haziran 2024 Cumartesi
- Kurban Bayramı 1.Gün: 16 Haziran 2024 Pazar
- Kurban Bayramı 2.Gün: 17 Haziran 2024 Pazartesi
- Kurban Bayramı 3.Gün: 18 Haziran 2024 Salı
- Kurban Bayramı 4.Gün: 19 Haziran 2024 Çarşamba
- 15 Temmuz Demokrasi ve Milli Birlik Günü: 15 Temmuz Pazartesi
- 30 Ağustos Zafer Bayramı: 30 Ağustos Cuma
- 29 Ekim Cumhuriyet Bayramı: 29 Ekim Salı`;
        setResmiTatilBilgileri(resmiTatilBilgileri);

        const SirketIkBilgileri = `Şirket İnsan Kaynakları Bilgileri:`;
        setSirketIkBilgileri(SirketIkBilgileri);
    }, [companyId]);

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Şirket Yönetimi</h3>
            <p>Giriş Yapan Personel Adı: {companyInfo.username}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <fieldset style={{ flex: 1 }}>
                        <legend>Personel Bilgileri</legend>
                        <form>
                            <image>
                                <label htmlFor="nameId1">Personel Fotoğraf: </label>
                                <br />
                                <input id="nameId1" type="image" name="image" placeholder="Enter Your Username..."/>
                            </image>
                            <br />
                            <label htmlFor="nameId1">Kullanıcı Adı: </label>
                            <input id="nameId1" type="text" name="name1" placeholder="Enter Your Username..."/>
                            <br />
                            <label htmlFor="nameId2">Email: </label>
                            <input id="nameId2" type="email" name="name2" placeholder="Enter Your E-mail..."/>
                            <br />
                            <label htmlFor="nameI3">Şifre: </label>
                            <input id="nameId3" type="password" name="name3" placeholder="Enter Your Password..."/>
                            <br />
                            <label htmlFor="nameId4">İsim: </label>
                            <input id="nameId4" type="text" name="name4" placeholder="Enter Your First Name..."/>
                            <br />
                            <label htmlFor="nameId5">Soyisim: </label>
                            <input id="nameId5" type="text" name="name5" placeholder="Enter Your Last Name..."/>
                            <br />
                            <label htmlFor="nameId6">Telefon Numarası: </label>
                            <input id="nameId6" type="tel" name="name6" placeholder="Enter Your Phone Number..."/>
                            <br />
                            <label htmlFor="nameId6">Personelin Çalıştığı Şirket: </label>
                            <input id="nameId6" type="tel" name="name6" placeholder="Enter Your Phone Number..."/>
                            <br />
                            <label htmlFor="nameId1">Adres: </label>
                            <input id="nameId7" type="text" name="name7" placeholder="Enter Your Address..."/>
                            <br />
                            <label>Personelin Vardiya Bilgileri: <select name="select1">
                                <option value="value1">Gündüz / 09.00-17.00</option>
                                <option value="value1">Gündüz / 06.00-12.00</option>
                                <option value="value2">Gündüz / 12.00-18.00</option>
                                <option value="value3">Gece / 18.00-00.00</option>
                                <option value="value4">Gece / 00.00-06.00</option>
                            </select>
                            </label>
                            <br />
                            <label>Personelin Mola Bilgileri: <select name="select1">
                                <option value="value1">Öğlen Yemeği / 12.00-13.00</option>
                                <option value="value1">Akşam Yemeği / 18.00-19.00</option>
                            </select>
                            </label>
                            <br />
                            <label>Çalıştığı Departman: <select name="select1">
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
                            <label htmlFor="nameId1">Personel Maaşı: </label>
                            <input id="nameId7" type="text" name="name7" />
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
                            <button type="submit">Kaydet</button>
                        </form>
                    </fieldset>
                <fieldset style={{ flex: 1 }}>
                    <legend>Şirket Resmi Tatil Bilgileri:</legend>
                    <form>
                        <textarea
                            rows="15" // İhtiyaca göre ayarlayabilirsiniz
                            cols="66" // İhtiyaca göre ayarlayabilirsiniz
                            value={resmiTatilBilgileri}
                            readOnly
                        />
                    </form>
                </fieldset>
                <fieldset style={{ flex: 1 }}>
                    <legend>Şirket İnsan Kaynakları Bilgileri:</legend>
                    <form>
                        <textarea
                            rows="15" // İhtiyaca göre ayarlayabilirsiniz
                            cols="66" // İhtiyaca göre ayarlayabilirsiniz
                            value={SirketIkBilgileri}
                            readOnly
                        />
                    </form>
                </fieldset>
            </div>
        </div>
    );
}

export default UserInformation;
