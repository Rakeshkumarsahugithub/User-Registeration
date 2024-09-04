import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

import './LandingPage.css'; // Make sure this file exists

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in both fields.');
            return;
        }

        axios.post(`${window.location.origin}/login`, { email, password })
            .then(res => {
                if (res.data.Login) { // Use correct key from response
                    navigate('/home');
                } else {
                    setError(res.data.Message || 'Login failed');
                }
            })
            .catch(err => {
                console.log(err);
                setError('An error occurred during login');
            });
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    return (
        <div className="container">
            <div className="form-card">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Your Email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Your Password"
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <p>Don't have an account?</p>
                <button type="button" className="btn btn-secondary" onClick={handleSignupClick}>SignUp</button>
            </div>
        </div>
    );
};

export default LoginPage;

