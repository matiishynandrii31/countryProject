import React from 'react';

function Country({ country, getCountryInfo }) {
    console.log(getCountryInfo);
    return (
        <div className="header">
            <button onClick={getCountryInfo}>CountryList</button>
        </div>
    );
}

export default Country;