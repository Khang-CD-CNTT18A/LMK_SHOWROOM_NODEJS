
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

// Cau hinh Handlebars
app.engine('handlebars', engine({
    extname: '.handlebars',
    defaultLayout: false,
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Trang chu
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hoc Express voi Handlebars',
        message: 'Chao mung den voi Template Engine Handlebars!'
    });
});

app.listen(3004, () => {
    console.log('Handlebars server dang chay tai http://localhost:3004');
});
