import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import UserModel from './Student.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "https://user-registlog.vercel.app/",
    credentials: true
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

mongoose.connect('mongodb://127.0.0.1:27017/user');
app.use(express.static(path.resolve(__dirname, "client", "build")));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    UserModel.create({ name, email, password })
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email })
        .then(user => {
            if (user && user.password === password) {
                const accessToken = jwt.sign({ email: email }, "jwt-access-token-secret-key", { expiresIn: '2m' });
                const refreshToken = jwt.sign({ email: email }, "jwt-refresh-token-secret-key", { expiresIn: '5m' });
                res.cookie('accessToken', accessToken, { maxAge: 120000, httpOnly: true, secure: true, sameSite: 'strict' });
                res.cookie('refreshToken', refreshToken, { maxAge: 300000, httpOnly: true, secure: true, sameSite: 'strict' });
                res.json({ Login: true, Message: "Login successful" });
            } else {
                res.json({ Login: false, Message: "No record found!" });
            }
        })
        .catch(err => res.status(500).json(err));
});

const verifyUser = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.json({ valid: false, Message: "Invalid token!" });
    } else {
        jwt.verify(token, 'jwt-access-token-secret-key', (err, decoded) => {
            if (err) {
                return res.json({ valid: false, Message: "Invalid token!" });
            } else {
                req.email = decoded.email; // Store decoded info if needed
                next();
            }
        });
    }
};

const renewToken = (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.json({ valid: false, Message: "No refresh token!" });
    } else {
        jwt.verify(refreshToken, 'jwt-refresh-token-secret-key', (err, decoded) => {
            if (err) {
                return res.json({ valid: false, Message: "Invalid refresh token!" });
            } else {
                const accessToken = jwt.sign({ email: decoded.email }, 'jwt-access-token-secret-key', { expiresIn: '2m' });
                res.cookie('accessToken', accessToken, { maxAge: 120000, httpOnly: true, secure: true, sameSite: 'strict' });
                return res.json({ valid: true, Message: "Token renewed successfully!" });
            }
        });
    }
};

// Sample protected route using verifyUser middleware
app.get('/protected-route', verifyUser, (req, res) => {
    res.send('This is a protected route');
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
