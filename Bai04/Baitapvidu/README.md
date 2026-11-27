# BÀI 04 – XÂY DỰNG WEB VỚI EXPRESS FRAMEWORK

## 1. Thông tin bài thực hành

- **Môn học:** Lập trình Node.js
- **Bài:** Bài 04 – Express Framework
- **Sinh viên:** Lâm Minh Khang
- **Lớp:** CNTT18A
- **Trường:** Cao đẳng Kỹ thuật Công nghệ Nha Trang

## 2. Mục tiêu

- Làm quen với Express Framework trong Node.js.
- Tìm hiểu cách xây dựng và xử lý Route.
- Sử dụng Middleware.
- Làm việc với Template Engine Pug và Handlebars.
- Xử lý lỗi trong Express.
- Xây dựng ứng dụng theo mô hình MVC.

## 3. Các bài thực hành

### Bài 1: Express Application

- Tạo ứng dụng Express đầu tiên.
- Khởi chạy máy chủ tại cổng 3000.
- Hiển thị nội dung Hello, Express!

### Bài 2: Express Route

- Tạo các đường dẫn `/`, `/about`, `/contact`.
- Xử lý đường dẫn không tồn tại bằng mã trạng thái 404.
- Máy chủ chạy tại cổng 3001.

### Bài 3: Express Middleware

- Sử dụng Middleware để theo dõi yêu cầu.
- Hiển thị thời gian, phương thức HTTP và đường dẫn truy cập.
- Máy chủ chạy tại cổng 3002.

### Bài 4: Pug Template

- Cấu hình Pug làm Template Engine.
- Truyền dữ liệu từ Express đến giao diện.
- Máy chủ chạy tại cổng 3003.

### Bài 5: Handlebars Template

- Cài đặt và cấu hình Express Handlebars.
- Hiển thị tiêu đề và nội dung bằng biến dữ liệu.
- Máy chủ chạy tại cổng 3004.

### Bài 6: Error Handling

- Xây dựng ứng dụng tính phép chia.
- Sử dụng middleware xử lý lỗi.
- Kiểm tra trường hợp chia cho 0 và dữ liệu không hợp lệ.
- Máy chủ chạy tại cổng 3005.

### Bài 7: Express MVC – Calculator

Xây dựng ứng dụng máy tính theo mô hình MVC.

Các chức năng:
- Nhập hai số.
- Thực hiện phép cộng.
- Thực hiện phép trừ.
- Thực hiện phép nhân.
- Thực hiện phép chia.
- Kiểm tra và hiển thị lỗi khi chia cho 0.

Cấu trúc thư mục:

```text
my-express-app/
├── app.js
├── controllers/
│   └── calculatorController.js
├── models/
│   └── calculatorModel.js
├── views/
│   └── calculator.pug
└── public/
    └── styles.css
```

## 4. Công nghệ sử dụng

- Node.js
- Express.js
- Pug
- Express Handlebars
- Body-parser
- HTML
- CSS
- JavaScript

## 5. Cách chạy chương trình

Cài đặt các thư viện cần thiết:

```bash
npm install express pug express-handlebars body-parser
```

Chạy từng bài thực hành:

```bash
node App.js
node express_route.js
node express_middleware.js
node express_pug.js
node express_handlebars.js
node express_errorhandling.js
```

Chạy ứng dụng MVC:

```bash
cd my-express-app
node app.js
```

Truy cập trình duyệt:

- Express: http://localhost:3000
- Route: http://localhost:3001
- Middleware: http://localhost:3002
- Pug: http://localhost:3003
- Handlebars: http://localhost:3004
- Error Handling: http://localhost:3005
- MVC Calculator: http://localhost:3006

## 6. Hình ảnh kết quả

Các hình ảnh minh họa được lưu trong thư mục `image`.


## 7. Kết luận

Sau khi hoàn thành bài thực hành, em đã hiểu cách sử dụng Express Framework để xây dựng ứng dụng web với Node.js. Em đã thực hành Route, Middleware, Template Engine, Error Handling và xây dựng ứng dụng theo mô hình MVC.

**Bài thực hành đã hoàn thành.**