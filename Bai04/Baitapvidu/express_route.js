
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Trang chu Express');
});

app.get('/about', (req, res) => {
    res.send('Day la trang gioi thieu');
});

app.get('/contact', (req, res) => {
    res.send('Day la trang lien he');
});

app.use((req, res) => {
    res.status(404).send('Khong tim thay trang!');
});

app.listen(3001, () => {
    console.log('Route server dang chay tai http://localhost:3001');
});
