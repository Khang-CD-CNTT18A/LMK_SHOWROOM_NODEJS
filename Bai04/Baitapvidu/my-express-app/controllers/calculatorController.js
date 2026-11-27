
const express = require('express');
const router = express.Router();

const calculatorModel = require('../models/calculatorModel');

// Hien thi giao dien
router.get('/', (req, res) => {
    res.render('calculator', {
        result: null,
        error: null
    });
});

// Xu ly phep tinh
router.post('/calculate', (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const operation = req.body.operation;

    try {
        if (
            req.body.num1 === '' ||
            req.body.num2 === '' ||
            !Number.isFinite(num1) ||
            !Number.isFinite(num2)
        ) {
            throw new Error('Vui long nhap hai so hop le!');
        }

        const result = calculatorModel.calculate(
            num1,
            num2,
            operation
        );

        res.render('calculator', {
            result: result,
            error: null
        });

    } catch (error) {
        res.render('calculator', {
            result: null,
            error: error.message
        });
    }
});

// Bat buoc xuat router
module.exports = router;
