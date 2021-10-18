import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark text-white p-5 mb-0 text-center">
            <div className="d-flex justify-content-around align-items-center">
                <div>
                    <div className="mb-2">
                        <Link to="/home">
                            <button className="btn btn-dark">Home</button>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/pharmacies">
                            <button className="btn btn-dark">Pharmacies</button>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/achieve">
                            <button className="btn btn-dark">Achieve</button>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/contact">
                            <button className="btn btn-dark">Contact</button>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link to="/about">
                            <button className="btn btn-dark">About</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <h1>Follow Us </h1>
                    <i className="fab fa-facebook fs-3 me-2"></i>
                    <i className="fab fa-instagram fs-3 me-2"></i>
                    <i className="fab fa-twitter fs-3 me-2"></i>
                    <i className="fab fa-linkedin fs-3 me-2"></i>
                    <i className="fab fa-youtube fs-3"></i>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-around align">
                <p>©Copyrighted by Local Pharmacy.</p>
                <p>Wonderful Services With 'Local Pharmacy'.</p>
            </div>
        </div>
    );
};

export default Footer;
