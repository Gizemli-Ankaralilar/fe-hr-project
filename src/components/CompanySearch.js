// src/components/CompanySearch.js

import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';

function CompanySearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [visibleCompanies, setVisibleCompanies] = useState(4); // Maksimum görünen şirket sayısı

    useEffect(() => {
        // Burada şirket bilgilerini API'den almak için gerekli kodları ekleyebilirsiniz.
        // Örnek: fetch veya axios kullanarak API çağrısı yapabilirsiniz.
        // Şu anki örnek, static bir liste üzerinden filtreleme yapar.
        const companies = [
            // Şirketlerin örnek bilgileri
            { name: 'BilgeAdam', address: 'Ankara', email: 'bilgeadam@bilgeadam.com' },
            { name: 'BilgeAdam', address: 'Ankara', email: 'bilgeadam@bilgeadam.com' },
            { name: 'BilgeAdam', address: 'Ankara', email: 'bilgeadam@bilgeadam.com' },
            { name: 'BilgeAdam', address: 'Ankara', email: 'bilgeadam@bilgeadam.com' }
        ];

        // Şirket adına göre filtreleme yapılıyor
        const filteredCompanies = companies.filter(company =>
            company.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResults(filteredCompanies);
    }, [searchTerm]);

    const handleLoadMore = () => {
        setVisibleCompanies(prevVisibleCompanies => prevVisibleCompanies + 4);
    };

    return (
        <>
            <fieldset>
                <form>
                    {/* Arama formu */}
                    <label htmlFor="searchTerm">Şirket İsmine Göre Ara: </label>
                    <input
                        type="text"
                        id="searchTerm"
                        name="searchTerm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <br />

                    {/* Arama sonuçları */}
                    <div className="company-cards">
                        {searchResults.slice(0, visibleCompanies).map((company, index) => (
                            <CompanyCard key={index} company={company} userInfo={userInfo} />
                        ))}
                    </div>
                </form>
            </fieldset>

            {/* Eklediğimiz CSS */}
            <style jsx>{`
                .company-cards {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

                .company-card {
                    flex: 1 0 calc(25% - 10px);
                    margin-bottom: 10px;
                }
            `}</style>
        </>
    );
}

export default CompanySearch;
