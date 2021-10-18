import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [singleDetail, setSingleDetail] = useState({});
    useEffect(() => {
        const url = '/fakeDATA.json';

        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);

    useEffect(() => {
        const foundDetail = details.find(detail => detail.id == id);
        setSingleDetail(foundDetail);
    }, [details, id]);
    // const { drugName, drugCity, email, phone, image } = singleDetail?;
    // console.log(details);
    console.log(singleDetail);
    return (
        <div className="container my-5 d-md-flex justify-content-around align-items-center">
            <div className="card card-body me-2">
                <h3>Pharmacy Name: {singleDetail?.drugName}</h3>
                <h4>City: {singleDetail?.drugCity}</h4>
                <h5>Company: {singleDetail?.drugCompany}</h5>
                <p>Email: {singleDetail?.email}</p>
                <p>Phone: {singleDetail?.phone}</p>
            </div>
            <div>
                <img
                    src={singleDetail?.image}
                    className="card img-thumbnail img-fluid"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Details;
