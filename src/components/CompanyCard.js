// src/components/CompanyCard.js

import React from 'react';

function CompanyCard({ company, userInfo }) {
    return (
        <div className="company-card">

            <fieldset>
                <legend>{company.name}</legend>
                <form>
                    <h3>{company.name}</h3>
                    <p>Email: {company.email}</p>
                    <p>Adres: {company.address}</p>
                </form>
            </fieldset>
        </div>
    );
}

export default CompanyCard;
