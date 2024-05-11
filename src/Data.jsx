import React, { useEffect, useState } from 'react';

function Data() {
    const [country, setCountry] = useState("azerbaijan");
    const [dt, setDt] = useState({});

    function getCountry(e) {
        setCountry(e.target.value ? e.target.value :"azerbaijan" );
    }

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${country}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setDt(data[0]))
    }, [country]);

    return (
        <div className='main'>
            <div className='input'>
                <input type="text" onChange={getCountry} />
            </div>
            <div className='card'>
                <img src={dt.flags?.png} alt="" />
                <h3>{dt.name?.common}</h3>
                <h4>{dt?.region}</h4>
                <h5>{dt?.capital}</h5>
            </div>
        </div>
    );
}

export default Data;
