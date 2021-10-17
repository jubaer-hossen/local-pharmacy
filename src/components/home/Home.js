import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Pharmacy from './Pharmacy';

const Home = () => {
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
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="my-5">
                <h1>Local Pharmacies near you</h1>
                {pharmacies.length === 0 && (
                    <div className="d-flex justify-content-center pt-5 mt-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {pharmacies.slice(0, 6).map(pharmacy => (
                        <Pharmacy
                            key={pharmacy.id}
                            pharmacy={pharmacy}
                        ></Pharmacy>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;