
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Su dung CSS
app.use(express.static(path.join(__dirname, 'public')));

// Ham tao giao dien chung
function layout(title, content) {
    return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <header>
            <h1>MY PERSONAL WEBSITE</h1>
            <nav>
                <a href="/">Trang chu</a>
                <a href="/about">Gioi thieu</a>
                <a href="/skills">Ky nang</a>
                <a href="/hobbies">So thich</a>
                <a href="/contact">Lien he</a>
            </nav>
        </header>

        <main>
            ${content}
        </main>

        <footer>
            <p>© 2026 - Website gioi thieu ban than</p>
        </footer>
    </body>
    </html>
    `;
}

// Trang chu
app.get('/', (req, res) => {
    res.send(layout('Trang chu', `
        <h2>Xin chao! Toi la Lam Minh Khang</h2>
        <p>Chao mung ban den voi website ca nhan cua toi.</p>
        <p>Day la noi gioi thieu ve ban than, ky nang va so thich cua toi.</p>
    `));
});

// Trang gioi thieu
app.get('/about', (req, res) => {
    res.send(layout('Gioi thieu', `
        <h2>Gioi thieu ban than</h2>
        <p>Ho va ten: Lam Minh Khang</p>
        <p>Lop: CNTT18A</p>
        <p>Truong: Cao dang Ky thuat Cong nghe Nha Trang</p>
        <p>Nganh hoc: Cong nghe thong tin dien tu</p>
    `));
});

// Trang ky nang
app.get('/skills', (req, res) => {
    res.send(layout('Ky nang', `
        <h2>Ky nang cua toi</h2>
        <ul>
            <li>HTML va CSS</li>
            <li>JavaScript</li>
            <li>Node.js va Express</li>
            <li>React Native</li>
            <li>Git va GitHub</li>
        </ul>
    `));
});

// Trang so thich
app.get('/hobbies', (req, res) => {
    res.send(layout('So thich', `
        <h2>So thich cua toi</h2>
        <ul>
            <li>Tim hieu cong nghe moi</li>
            <li>Lap trinh va phat trien ung dung</li>
            <li>Tim hieu xe hoi</li>
            <li>Nghe nhac va xem phim</li>
        </ul>
    `));
});

// Trang lien he
app.get('/contact', (req, res) => {
    res.send(layout('Lien he', `
        <h2>Thong tin lien he</h2>
        <p>Ho va ten: Lam Minh Khang</p>
        <p>Email: Chua cap nhat</p>
        <p>Dia chi: Nha Trang, Khanh Hoa</p>
    `));
});

// Xu ly trang khong ton tai
app.use((req, res) => {
    res.status(404).send(layout('404 - Not Found', `
        <h2>404 - Khong tim thay trang!</h2>
        <p>Duong dan ban truy cap khong ton tai.</p>
        <a href="/">Quay ve trang chu</a>
    `));
});

// Khoi dong server
app.listen(PORT, () => {
    console.log(`Server dang chay tai http://localhost:${PORT}`);
});
