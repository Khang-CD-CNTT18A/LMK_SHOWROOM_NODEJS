const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log('Ket noi MongoDB thanh cong!');

    const db = client.db('qlsinhvien');
    const students = db.collection('students');

    const data = [
      { masv: 'SV01', hoten: 'Lâm Minh Khang', tuoi: 20, diem: 8 },
      { masv: 'SV02', hoten: 'Hà Văn Sâm', tuoi: 19, diem: 7.5 },
      { masv: 'SV03', hoten: 'Võ Thành Phúc', tuoi: 21, diem: 9 }
    ];

    const result = await students.insertMany(data);
    console.log('So sinh vien da them:', result.insertedCount);

    console.log('\nDANH SACH SINH VIEN:');

    const list = await students.find().toArray();

    list.forEach(student => {
      console.log(
        `Ma SV: ${student.masv} | Ho ten: ${student.hoten} | Tuoi: ${student.tuoi} | Diem: ${student.diem}`
      );
    });
  } catch (error) {
    console.log('Loi:', error);
  } finally {
    await client.close();
    console.log('\nDa dong ket noi MongoDB!');
  }
}

main();
