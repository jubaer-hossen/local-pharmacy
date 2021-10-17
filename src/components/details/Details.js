import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    useEffect(() => {
        const url = `https://jubaer-hossen.github.io/Pharmacy-fake-data/fakeDATA.json`;

        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data));
    }, []);
    console.log(detail);
    return (
        <div>
            <h1>hey {id} </h1>
        </div>
    );
};

export default Details;
