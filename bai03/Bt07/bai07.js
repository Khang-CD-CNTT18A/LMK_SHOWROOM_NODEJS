const http = require('http');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');


    if (url.pathname === '/hello') {
        const name = url.searchParams.get('name');

        if (!name) {
            res.statusCode = 400;
            res.end('Loi: Thieu tham so name!');
        } else {
            res.end(`Xin chao ${name}.`);
        }
    }


    else if (url.pathname === '/sum') {
        const a = url.searchParams.get('a');
        const b = url.searchParams.get('b');

        if (a === null || b === null || a.trim() === '' || b.trim() === '') {
            res.statusCode = 400;
            res.end('Loi: Thieu tham so a hoac b!');
        } else if (!Number.isFinite(Number(a)) || !Number.isFinite(Number(b))) {
            res.statusCode = 400;
            res.end('Loi: Gia tri a va b phai la so!');
        } else {
            const tong = Number(a) + Number(b);
            res.end(`Tong = ${tong}`);
        }
    }


    else {
        res.statusCode = 404;
        res.end('Loi: Khong tim thay trang!');
    }
});

server.listen(3001, () => {
    console.log('Web Server dang chay tai http://localhost:3001');
});