
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');
        const students = db.collection('students');

        // Tim sinh vien co diem >= 7
        console.log('\nSINH VIEN CO DIEM >= 7:');

        const list = await students.find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        list.forEach(student => {
            console.log(
                `Ma SV: ${student.masv} | Ho ten: ${student.hoten} | Diem: ${student.diem}`
            );
        });

        // Cap nhat diem sinh vien SV02
        const result = await students.updateOne(
            { masv: 'SV02' },
            { $set: { diem: 8.5 } }
        );

        console.log('\nCAP NHAT DIEM SV02:');
        console.log('So sinh vien tim thay:', result.matchedCount);
        console.log('So sinh vien duoc cap nhat:', result.modifiedCount);

        // Hien thi thong tin sau cap nhat
        const student = await students.findOne({ masv: 'SV02' });

        console.log('\nTHONG TIN SAU CAP NHAT:');
        console.log(student);

    } catch (error) {
        console.log('Loi:', error);
    } finally {
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();
