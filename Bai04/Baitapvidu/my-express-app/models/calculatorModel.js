
function calculate(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                throw new Error('Khong the chia cho 0!');
            }
            return num1 / num2;
        default:
            throw new Error('Phep tinh khong hop le!');
    }
}

module.exports = { calculate };
