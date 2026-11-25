
const fs = require('fs');

if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
    console.log('Tao thu muc data thanh cong!');
}

const noiDung = `Dong 1: Hoc Node.js
Dong 2: Tim hieu module fs
Dong 3: Thuc hanh tao, doi ten va xoa tap tin`;

fs.writeFileSync('data/ghichu.txt', noiDung);
console.log('Ghi noi dung vao ghichu.txt thanh cong!');

fs.renameSync('data/ghichu.txt', 'data/ghichu_moi.txt');
console.log('Doi ten thanh ghichu_moi.txt thanh cong!');

const duLieu = fs.readFileSync('data/ghichu_moi.txt', 'utf8');
console.log('\nNoi dung tap tin sau khi doi ten:');
console.log(duLieu);

fs.writeFileSync('data/tam.txt', 'Day la tap tin tam.');
console.log('\nTao tap tin tam.txt thanh cong!');

fs.unlinkSync('data/tam.txt');
console.log('Xoa tap tin tam.txt thanh cong!');
