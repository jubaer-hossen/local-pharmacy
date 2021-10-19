import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MoreCategory from '../MoreCategory/MoreCategory';
import Outstanding from '../OUTSTANDING/Outstanding';
import Banner from './Banner';
import Pharmacy from './Pharmacy';

const Home = () => {
    const [pharmacies, setPharmacies] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const url =
            'https://jubaer-hossen.github.io/Pharmacy-fake-data/fakeDATA.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setPharmacies(data));
    }, []);

    useEffect(() => {
        const url = '/moreFakeData.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);
    // console.log(pharmacies);
    // console.log(categories);
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="my-5 text-center container">
                <h1>Local Pharmacies near you</h1>
                {pharmacies.length === 0 && (
                    <div className="d-flex justify-content-center pt-5 mt-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {pharmacies.slice(6, 12).map(pharmacy => (
                        <Pharmacy
                            key={pharmacy.id}
                            pharmacy={pharmacy}
                        ></Pharmacy>
                    ))}
                </div>
            </div>
            <div className="text-center mb-5">
                <Link to="/pharmacies">
                    <button className="btn btn-primary">
                        Show More Services
                    </button>
                </Link>
            </div>
            <div>
                <Outstanding></Outstanding>
            </div>
            <div className="container my-5">
                <div className="text-center text-primary">
                    <h1>Category We Can Help You With</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                    {categories.map(category => (
                        <MoreCategory
                            key={category.id}
                            category={category}
                        ></MoreCategory>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
