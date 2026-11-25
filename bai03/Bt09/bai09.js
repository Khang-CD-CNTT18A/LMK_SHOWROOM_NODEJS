
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {

        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');
        const students = db.collection('students_test');

        const danhSach = [
            { masv: 'SV001', hoten: 'Lâm Minh Khang', tuoi: 20, diem: 8 },
            { masv: 'SV002', hoten: 'Tran quoc Huy', tuoi: 19, diem: 4 },
            { masv: 'SV003', hoten: 'Ha van Sam', tuoi: 21, diem: 7 },
            { masv: 'SV004', hoten: 'Pham hoang Hai', tuoi: 20, diem: 3 },
            { masv: 'SV005', hoten: 'Vo thanh Phúc', tuoi: 22, diem: 6 }
        ];

        await students.insertMany(danhSach);
        console.log('Them 5 sinh vien thanh cong!');

        const ketQua1 = await students.deleteOne({ masv: 'SV005' });
        console.log('So sinh vien xoa bang deleteOne():', ketQua1.deletedCount);

        const ketQua2 = await students.deleteMany({
            diem: { $lt: 5 }
        });
        console.log('So sinh vien xoa bang deleteMany():', ketQua2.deletedCount);

        const conLai = await students.find().toArray();

        console.log('\nDanh sach sinh vien con lai:');
        console.log(conLai);

    } catch (error) {
        console.log('Co loi xay ra:', error.message);
    } finally {
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();
