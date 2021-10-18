import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');

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

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    };

    const handleSignUp = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }
        isLogin
            ? processLogin(email, password)
            : createNewUser(email, password);
    };

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            });
    };
    return (
        <form
            onSubmit={handleSignUp}
            className="bg-primary background  py-5 m-5 mx-auto w-75"
        >
            <div className="w-50 mx-auto my-5 bg-light p-5 rounded">
                <h3 className="text-center">
                    {isLogin ? 'Log In' : 'Sign Up'}
                </h3>

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
                <div className="text-danger">{error}</div>
                <br />
                <div>
                    <input
                        onChange={toggleLogin}
                        className="form-check-input"
                        type="checkbox"
                        name="
                    "
                        id="checkbox"
                    />
                    <label htmlFor="checkbox">Already Registered</label>
                </div>

                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary">
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </button>
                </div>

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
