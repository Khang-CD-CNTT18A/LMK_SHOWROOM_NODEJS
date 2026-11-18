const { tinhDiemTB, xepLoai } = require('./xulyDiem');

const sinhVien = [
    { hoTen: 'Lâm Minh khang', diem1: 8, diem2: 9, diem3: 7 },
    { hoTen: 'Trần Quốc Huy', diem1: 7, diem2: 6, diem3: 8 },
    { hoTen: 'Hà Văn Sâm', diem1: 4, diem2: 5, diem3: 3 }
];

console.log('DANH SACH SINH VIEN:');

sinhVien.forEach(sv => {
    const diemTB = tinhDiemTB(sv.diem1, sv.diem2, sv.diem3);
    const loai = xepLoai(diemTB);

    console.log(`Ho ten: ${sv.hoTen}`);
    console.log(`Diem trung binh: ${diemTB.toFixed(2)}`);
    console.log(`Xep loai: ${loai}`);
    console.log('-------------------------');
});
