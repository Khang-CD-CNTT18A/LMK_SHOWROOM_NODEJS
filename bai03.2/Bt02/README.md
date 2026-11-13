# BÀI 03 - BÀI TẬP 02: TẠO WEB SERVER BẰNG NODE.JS

## 1. Giới thiệu

Xây dựng Web Server bằng module HTTP có sẵn trong Node.js, sử dụng cổng 3000.

## 2. Yêu cầu bài tập

- Sử dụng module `http` để tạo Web Server tại cổng 3000.
- Truy cập `/`: Hiển thị lời chào và mã sinh viên.
- Truy cập `/about`: Hiển thị thông tin giới thiệu bản thân.
- Truy cập đường dẫn không tồn tại: Trả về mã trạng thái HTTP 404.

## 3. Cấu trúc thư mục

```text
Bai03/
└── Bt02/
    ├── bai02.js
    ├── README.md
    ├── code.png
    ├── trangchu.png
    ├── about.png
    └── 404.png
```

## 4. Các bước thực hiện

### Bước 1: Mở Terminal tại thư mục Bt02

```powershell
cd "F:\LamMinhKhang_CD-cntt18a\Bai03\Bt02"
```

### Bước 2: Chạy Web Server

```powershell
node bai02.js
```

### Bước 3: Kiểm tra trên trình duyệt

- Trang chủ: http://localhost:3000
- Trang giới thiệu: http://localhost:3000/about
- Trang không tồn tại: http://localhost:3000/test

## 5. Kết quả thực hiện

### 5.1. Mã nguồn chương trình

![Mã nguồn bai02.js](code.png)

### 5.2. Kết quả trang chủ

![Trang chủ](trangchu.png)

### 5.3. Kết quả trang giới thiệu

![Trang giới thiệu](about.png)

### 5.4. Kết quả đường dẫn không tồn tại - HTTP 404

![Lỗi 404](404.png)

## 6. Kết luận

Đã hoàn thành bài tập tạo Web Server bằng module HTTP của Node.js, xử lý các đường dẫn `/`, `/about` và trả về trạng thái HTTP 404 khi truy cập đường dẫn không tồn tại.
