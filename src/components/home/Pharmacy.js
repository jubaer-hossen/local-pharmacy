import React from 'react';

const Pharmacy = props => {
    // console.log(props.pharmacy);
    const { drugName, image } = props.pharmacy;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{drugName}</h5>
                    <p className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pharmacy;
