
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Xu ly du lieu form
app.use(bodyParser.urlencoded({ extended: true }));

// Trang chu hien thi form
app.get('/', (req, res) => {
    res.send(`
        <h2>Ung dung phep chia</h2>
        <form action="/divide" method="POST">
            <label>So bi chia:</label>
            <input type="number" name="dividend" required>
            <br><br>

            <label>So chia:</label>
            <input type="number" name="divisor" required>
            <br><br>

            <button type="submit">Submit</button>
        </form>
    `);
});

// Xu ly phep chia
app.post('/divide', (req, res, next) => {
    const dividend = Number(req.body.dividend);
    const divisor = Number(req.body.divisor);

    if (
        req.body.dividend === '' ||
        req.body.divisor === '' ||
        !Number.isFinite(dividend) ||
        !Number.isFinite(divisor) ||
        divisor === 0
    ) {
        const error = new Error('Invalid input');
        error.status = 400;
        return next(error);
    }

    const result = dividend / divisor;
    res.send(`Ket qua phep chia: ${dividend} / ${divisor} = ${result}`);
});

// Middleware xu ly loi
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(`Loi ${err.status || 500}: ${err.message}`);
});

// Khoi dong server
app.listen(3005, () => {
    console.log('Error Handling server dang chay tai http://localhost:3005');
});
