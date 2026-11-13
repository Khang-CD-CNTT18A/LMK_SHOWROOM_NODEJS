class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien("SV01", "Nguyen Van An", 20, 8),
    new SinhVien("SV02", "Tran Thi Binh", 21, 4),
    new SinhVien("SV03", "Le Van Cuong", 19, 7),
    new SinhVien("SV04", "Pham Thi Dung", 20, 5),
    new SinhVien("SV05", "Hoang Van Em", 22, 3)
];

const sinhVienDat = danhSachSinhVien.filter(
    (sv) => sv.diem >= 5
);

console.log("DANH SACH SINH VIEN DAT YEU CAU:");

sinhVienDat.forEach((sv) => {
    console.log(
        `Ma: ${sv.ma} | Ho ten: ${sv.hoTen} | Tuoi: ${sv.tuoi} | Diem: ${sv.diem}`
    );
});
