import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle().then(result => {
            history.push(redirect_url);
        });
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleSignUp = e => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password).then(result => {
            const user = result.user;
            console.log(user);
        });
        e.preventDefault();
    };
    return (
        <form
            onSubmit={handleSignUp}
            className="bg-primary background  py-5 m-5 mx-auto w-75"
        >
            <div className="w-50 mx-auto my-5 bg-light p-5 rounded">
                <h3 className="text-center">Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                        onBlur={handleEmailChange}
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        onBlur={handlePasswordChange}
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
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
                    <button
                        onClick={handleGoogleLogin}
                        className="btn btn-danger"
                    >
                        Google Sign In
                    </button>
                </div>
            </div>
        </form>
    );
};

export default LogIn;
