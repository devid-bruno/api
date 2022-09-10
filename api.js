import express from 'express';
import User from './models/User.js';

const api = express();

const port = process.env.PORT || 3000;

api.get('/', (req, res) => {
    User.findAll().then(users => {
        res.json(users);
    });
});

api.get("/secret", (req, res) => {
    res.json({ message: "You found the secret!" });
});

api.listen(port, () => {
    console.log('Server listening on port 3000');
});