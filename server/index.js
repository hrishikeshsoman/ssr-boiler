import express from 'express';
import app from './app.js';

const port = 3000;

app.use('/assets', express.static('dist'));
app.listen(port, () => console.log(`App listening on port ${port}!`));
