
const fs = require('fs');


const hoTen = "Lâm Minh Khang";
const maSinhVien = "CD-CNTT18A18";
const lop = "CD-CNTT18A";


const noiDung = `Ho ten: ${hoTen}\nMa sinh vien: ${maSinhVien}\n`;


fs.writeFileSync('thongtin.txt', noiDung, 'utf8');
console.log("Da tao file thongtin.txt");


console.log("\nNOI DUNG BAN DAU:");
const duLieu = fs.readFileSync('thongtin.txt', 'utf8');
console.log(duLieu);


fs.appendFile('thongtin.txt', `Lop: ${lop}\n`, 'utf8', (err) => {
    if (err) {
        console.log("Loi khi ghi file:", err);
        return;
    }

    console.log("Da ghi noi ten lop!");


    console.log("\nNOI DUNG SAU KHI CAP NHAT:");
    const noiDungMoi = fs.readFileSync('thongtin.txt', 'utf8');
    console.log(noiDungMoi);
});
