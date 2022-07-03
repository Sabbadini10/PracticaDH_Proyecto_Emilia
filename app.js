const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath))

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./view/index.html'));
});

app.get('/music.html', (req, res) => {
    res.sendFile(path.resolve('./view/music.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.resolve('./view/about.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.resolve('./view/contact.html'));
});