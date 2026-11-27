
const express = require('express');

const app = express();
const PORT = 3000;

// Trang chu
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Khoi dong server
app.listen(PORT, () => {
    console.log(`Server dang chay tai http://localhost:${PORT}`);
});
