import React from 'react';

const Pharmacy = props => {
    // console.log(props.pharmacy);
    const { drugName, image, details } = props.pharmacy;
    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{drugName}</h5>
                    <p className="card-text">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default Pharmacy;
