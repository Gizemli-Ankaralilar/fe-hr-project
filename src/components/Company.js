// Company.js
import React, { useState, useEffect } from 'react';

function Company({ companyId }) {
    const [companyInfo, setCompanyInfo] = useState({});
    const [resmiTatilBilgileri, setResmiTatilBilgileri] = useState('');

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
        const resmiTatilBilgileri = `Resmi Tatil Bilgileri:
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
    }, [companyId]);

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Şirket Yönetimi</h3>
            <p>Giriş Yapan Yönetici Adı: {companyInfo.username}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <fieldset style={{ flex: 1 }}>
                    <legend>Şirket Yönetimi</legend>
                    <form>
                        <label htmlFor="nameId1">Şirketin Kar-Zarar Bilgisi: <br/></label>
                        <input id="nameId1" type="text" name="name1" />
                        <br />
                        <label htmlFor="nameId2">Şirketin Gider Bilgisi: <br/></label>
                        <input id="nameId2" type="text" name="name2"/>
                        <br />
                        <label>Yaklaşan Ödeme Bilgisi: <br /><textarea name="textarea1"></textarea></label>
                        <br />
                        <br />
                        <button type="submit">Kaydet</button>
                    </form>
                </fieldset>
                <fieldset style={{ flex: 1 }}>
                    <legend>Resmi Tatil Bilgileri:</legend>
                    <form>
                        <textarea
                            rows="15" // İhtiyaca göre ayarlayabilirsiniz
                            cols="66" // İhtiyaca göre ayarlayabilirsiniz
                            value={resmiTatilBilgileri}
                            readOnly
                        />
                    </form>
                </fieldset>
                <fieldset style={{ flex: 1}}>
                    <legend>Personel İzin Hakları:</legend>
                    <form>
                        <label>Personel İzin Hakları Tablosu: <br /><textarea name="textarea1"></textarea></label>
                        <br />
                        <br />
                        <button type="submit">Kaydet</button>
                    </form>
                </fieldset>
                <fieldset style={{ flex: 1 }}>
                    <legend>Çalışan Listesi </legend>
                    <form>
                        <label>Çalışan Listesi Tablosu: <br /><textarea name="textarea10"></textarea></label>
                        <br />
                        <br />
                        <button type="submit">Kaydet</button>
                    </form>
                </fieldset>
            </div>
        </div>
    );
}

export default Company;
