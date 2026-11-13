
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;

    if (path === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>Xin chao!</h1>
            <p>Chao mung ban den voi trang web cua toi.</p>
            <p>Ma sinh vien: CĐ-CNTT18A18</p>
        `);
    }

    else if (path === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>Gioi thieu ban than</h1>
            <p>Ho va ten: Lâm Minh Khang</p>
            <p>Lop: CNTT18A</p>
            <p>Toi dang hoc lap trinh Node.js.</p>
        `);
    }

    else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>404 - Not Found</h1>
            <p>Trang ban tim kiem khong ton tai!</p>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Web Server dang chay tai http://localhost:${PORT}`);
});
