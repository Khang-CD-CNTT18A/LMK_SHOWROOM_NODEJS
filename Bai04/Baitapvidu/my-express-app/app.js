
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3006;

// Cau hinh Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Cau hinh du lieu form
app.use(express.urlencoded({ extended: true }));

// Cau hinh thu muc CSS
app.use(express.static(path.join(__dirname, 'public')));

// Ket noi Controller
const calculatorController = require('./controllers/calculatorController');

app.use('/calculator', calculatorController);

// Trang chu
app.get('/', (req, res) => {
    res.redirect('/calculator');
});

// Khoi dong server
app.listen(PORT, () => {
    console.log(`MVC server dang chay tai http://localhost:${PORT}`);
});
