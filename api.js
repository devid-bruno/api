import express from 'express';

const api = express();

const port = process.env.PORT || 3000;

api.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

api.listen(port, () => {
    console.log('Server listening on port 3000');
});