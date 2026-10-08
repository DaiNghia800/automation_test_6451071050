# Phạm vi kiểm thử Login

Bộ test hiện có 14 ca, chạy tuần tự bằng Selenium WebDriver trên Chrome hiển thị. Mỗi ca mới TC07–TC14 có một commit riêng, bao gồm code, đặc tả và Excel tại thời điểm kiểm tra.

| Nhóm hành vi | Test case |
| --- | --- |
| Form hiển thị, mật khẩu được che | TC01 |
| Hai trường trống, thiếu username, thiếu password | TC02–TC04 |
| Tài khoản giả bị từ chối | TC05 |
| Bật/tắt lựa chọn giữ đăng nhập | TC06 |
| Dùng Tab và Enter | TC07–TC08 |
| Chỉ có khoảng trắng, username Unicode giả | TC09–TC10 |
| Mở quên mật khẩu và quay lại login | TC11, TC13 |
| Cấu hình liên kết đăng nhập Google | TC12 |
| Thử lại sau thông báo lỗi | TC14 |

## Các phần chưa bao phủ

Cần tài khoản thử nghiệm được phép sử dụng để kiểm tra đăng nhập thành công, tài khoản tồn tại nhưng sai mật khẩu, đăng xuất, truy cập trang cần xác thực, thời gian hết phiên và giữ đăng nhập sau khi mở lại browser. TC06 chỉ kiểm tra checkbox, không xác nhận cookie hoặc phiên thực tế.

TC12 chỉ đọc link OAuth và callback, không đăng nhập Google. TC11 và TC13 chỉ kiểm tra điều hướng, không gửi email khôi phục hoặc vượt captcha. Đăng nhập OAuth và khôi phục mật khẩu hoàn chỉnh cần tài khoản, mailbox thử nghiệm và phạm vi kiểm thử riêng.

Chưa có đặc tả quy định độ dài tối đa, tập ký tự hợp lệ, cách xử lý khoảng trắng quanh tài khoản hợp lệ, giới hạn số lần thử, tài khoản bị khóa, hiệu năng hoặc các browser khác. Không gán tỷ lệ bao phủ 100% chỉ dựa trên số ca hoặc tỷ lệ PASS.

## Cách chạy

- Toàn bộ: `npm test`.
- Một ca: `npm run test:one -- tests/TC07.test.cjs`.
- Report: `npm run report`, sau đó `npm run report:open`.
- Excel: `outputs/Login-Test-Cases.xlsx`, đặc tả: `docs/cases.json`.

Excel ghi kết quả lần kiểm tra được lưu trong Git. Chạy test lại sẽ tạo kết quả mới trong Allure; Excel không tự đổi. `npm test` lưu kết quả Allure cũ trong `artifacts/history` trước khi chạy.

Nguồn giao diện: https://vanphongdientu.utc.edu.vn/Login và https://vanphongdientu.utc.edu.vn/Login/GetPass (08/10/2026).

## Kết quả kiểm tra 08/10/2026

Lượt chạy cuối: 14/14 PASS trên Chrome hiển thị, Excel và Allure đã cập nhật đủ TC01–TC14. Một số lượt đầu gặp timeout hoặc ERR_NAME_NOT_RESOLVED khi khởi tạo/truy cập browser; kết quả cũ được lưu trong artifacts/history, không trộn với report cuối. Lượt xác nhận dùng CHROMEDRIVER trỏ tới driver đã tải sẵn.

Các commit test giữ nguyên kết quả tại thời điểm tạo, kể cả BLOCKED do môi trường ở lượt đầu. Kết quả xác nhận sau khi chạy lại nằm trong docs/cases.json và Excel hiện tại.
