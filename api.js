import express from 'express';
import bank from './database/db.js';

const api = express();

const port = process.env.PORT || 3000;

api.get('/', (req, res) => {
    bank.authenticate().then(() => {
        res.send('Conectado ao banco');
    }).catch((msgErr) => {
        res.send("Unable to connect to the database:", msgErr);
    });
});

api.get("/secret", (req, res) => {
    res.json({ message: "You found the secret!" });
});

api.listen(port, () => {
    console.log('Server listening on port 3000');
});