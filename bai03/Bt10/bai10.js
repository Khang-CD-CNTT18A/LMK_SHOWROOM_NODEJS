
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');

        const departments = db.collection('departments');
        const students = db.collection('students_join');

        await departments.deleteMany({});
        await students.deleteMany({});

        await departments.insertMany([
            { makhoa: 'CNTT', tenkhoa: 'Cong nghe thong tin' },
            { makhoa: 'DTVT', tenkhoa: 'Dien tu vien thong' }
        ]);
        console.log('Them 2 khoa thanh cong!');

        await students.insertMany([
            { masv: 'SV001', hoten: 'Lâm Minh Khang', makhoa: 'CNTT' },
            { masv: 'SV002', hoten: 'Trần quốc Huy', makhoa: 'DTVT' },
            { masv: 'SV003', hoten: 'Hà Văn Sâm', makhoa: 'CNTT' },
            { masv: 'SV004', hoten: 'Pham Hoàng Hải', makhoa: 'DTVT' }
        ]);
        console.log('Them 4 sinh vien thanh cong!');

        const ketQua = await students.aggregate([
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongTinKhoa'
                }
            },
            {
                $unwind: '$thongTinKhoa'
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$thongTinKhoa.tenkhoa'
                }
            }
        ]).toArray();

        console.log('\nDanh sach sinh vien kem ten khoa:');
        console.log(ketQua);

    } catch (error) {
        console.log('Co loi xay ra:', error.message);
    } finally {
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();
