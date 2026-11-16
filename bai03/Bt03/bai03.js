
const fs = require('fs');

// Thong tin sinh vien
const hoTen = "Lâm Minh Khang";
const maSinhVien = "CD-CNTT18A18";
const lop = "CD-CNTT18A";

// Tao noi dung ban dau
const noiDung = `Ho ten: ${hoTen}\nMa sinh vien: ${maSinhVien}\n`;

// 1. Tao file thongtin.txt
fs.writeFileSync('thongtin.txt', noiDung, 'utf8');
console.log("Da tao file thongtin.txt");

// 2. Doc va hien thi noi dung ban dau
console.log("\nNOI DUNG BAN DAU:");
const duLieu = fs.readFileSync('thongtin.txt', 'utf8');
console.log(duLieu);

// 3. Ghi noi ten lop vao cuoi file
fs.appendFile('thongtin.txt', `Lop: ${lop}\n`, 'utf8', (err) => {
    if (err) {
        console.log("Loi khi ghi file:", err);
        return;
    }

    console.log("Da ghi noi ten lop!");

    // 4. Doc lai file sau khi cap nhat
    console.log("\nNOI DUNG SAU KHI CAP NHAT:");
    const noiDungMoi = fs.readFileSync('thongtin.txt', 'utf8');
    console.log(noiDungMoi);
});
