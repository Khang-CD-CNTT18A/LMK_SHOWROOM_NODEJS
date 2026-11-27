
const express = require('express');
const app = express();

// Middleware ghi nhat ky
app.use((req, res, next) => {
    console.log('Thoi gian:', new Date().toLocaleString());
    console.log('Phuong thuc:', req.method);
    console.log('Duong dan:', req.url);
    next();
});

// Route trang chu
app.get('/', (req, res) => {
    res.send('Middleware Express hoat dong!');
});

app.listen(3002, () => {
    console.log('Middleware server dang chay tai http://localhost:3002');
});
