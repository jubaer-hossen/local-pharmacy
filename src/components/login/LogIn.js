import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';

const LogIn = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');

    const auth = getAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .finally(() => setIsLogin(false));
    };
    const handleNameChange = e => {
        setName(e.target.value);
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
                alert('successfully Login');
                history.push(redirect_url);
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
                alert('successfully SignUp');
                setError('');
                setUserName();
                history.push(redirect_url);
                window.location.reload();
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {
                // Profile updated!
                // ...
            })
            .catch(error => {
                // An error occurred
                // ...
            });
    };
    return (
        <form onSubmit={handleSignUp} className="bg-primary pt-5 bg-form">
            <div className="container mx-auto bg-light mt-5 p-5 rounded">
                <h3 className="text-center">
                    {isLogin ? 'Log In' : 'Sign Up'}
                </h3>

                {!isLogin && (
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            onBlur={handleNameChange}
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            required
                        />
                    </div>
                )}

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
                        <i class="fab fa-google"></i> Google Sign In
                    </button>
                </div>
            </div>
        </form>
    );
};

export default LogIn;
