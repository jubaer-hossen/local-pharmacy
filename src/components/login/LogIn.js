import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LogIn = () => {
    return (
        <div className="bg-primary background  py-5 m-5 mx-auto w-75">
            <form
                onSubmit=""
                className="w-50 mx-auto my-5 bg-light p-5 rounded"
            >
                <h3 className="text-center">Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>

                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p>
                    New to "Local Pharmacies"
                    <Link to="/signup"> Sign Up </Link>
                </p>
                <div className="text-center mt-4">
                    <button className="btn btn-danger">Google Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;
