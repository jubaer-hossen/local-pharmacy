import React from 'react';
import { Link } from 'react-router-dom';

const ShowPharmacies = props => {
    const { drugName, image, id, details } = props.pharmacy;

    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{drugName}</h5>
                    <p className="card-text">{details}</p>
                </div>
                <div>
                    <Link to={`/details/${id}`}>
                        <button className="btn btn-primary mb-3">
                            Click For Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShowPharmacies;
