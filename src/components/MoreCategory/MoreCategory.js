import React from 'react';
import './moreCategory.css';

const MoreCategory = props => {
    const { name, img, details } = props.category;
    return (
        <div>
            <div className="col h-100">
                <div className="card h-100 shadow">
                    <div className="ps-3">
                        <img src={img} alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreCategory;
