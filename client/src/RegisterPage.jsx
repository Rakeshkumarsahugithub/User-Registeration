import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 



const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${window.location.origin}/register`, { name, email, password })
            .then(res => {
                //console.log(res.data);
                navigate('/login');
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="container">
            <div className="form-card">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Your Name"
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)} required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Your Email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)} required
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
                            onChange={(e) => setPassword(e.target.value)} required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <p>Already have an account?</p>
                <button type="button" className="btn btn-secondary" onClick={handleLoginClick}>Login</button>
            </div>
        </div>
    );
};

export default RegisterPage;

