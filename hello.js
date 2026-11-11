
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <h1>LMK SHOWROOM</h1>
        <h2>Chào mừng đến với showroom xe hơi!</h2>
        <p>Server Node.js đang hoạt động.</p>
    `);
});

server.listen(8080, () => {
    console.log('Server đang chạy tại http://localhost:8080');
});
