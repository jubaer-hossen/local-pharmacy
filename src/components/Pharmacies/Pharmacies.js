import React, { useEffect, useState } from 'react';
import ShowPharmacies from './ShowPharmacies';

const Pharmacies = () => {
    const [pharmacies, setPharmacies] = useState([]);
    useEffect(() => {
        const url =
            'https://jubaer-hossen.github.io/Pharmacy-fake-data/fakeDATA.json';

        fetch(url)
            .then(res => res.json())
            .then(data => setPharmacies(data));
    }, []);
    // console.log(pharmacies);
    return (
        <div className="my-5 text-center">
            {pharmacies.length === 0 && (
                <div className="d-flex justify-content-center pt-5 mt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <h1>All Local Pharmacies Near You</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {pharmacies.map(pharmacy => (
                    <ShowPharmacies
                        key={pharmacy.id}
                        pharmacy={pharmacy}
                    ></ShowPharmacies>
                ))}
            </div>
        </div>
    );
};

export default Pharmacies;
