
const express = require('express');
const app = express();

// Cau hinh Pug
app.set('view engine', 'pug');

// Route trang chu
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hoc Express voi Pug',
        message: 'Chao mung den voi Template Engine Pug!'
    });
});

app.listen(3003, () => {
    console.log('Pug server dang chay tai http://localhost:3003');
});
