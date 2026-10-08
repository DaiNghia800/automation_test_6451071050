# Selenium Login UTC

Node.js 20+, Chrome. Chạy `npm ci`, sau đó `npm test` để quan sát Chrome chạy tuần tự. Mặc định mỗi thao tác dừng 900 ms. Có thể đặt `$env:STEP_DELAY_MS='1500'` trong PowerShell.

Chạy một ca: `npm run test:one -- tests/TC01.test.cjs`. Chạy ẩn nếu cần: `$env:HEADLESS='1'`. Mỗi ca tạo browser mới và đóng sau khi lưu ảnh trong artifacts và Allure. Selenium Manager tự tìm/tải driver; có thể đặt CHROMEDRIVER và CHROME_BINARY nếu cần dùng driver/browser cài sẵn.

Report: `npm run report`, sau đó `npm run report:open`. Allure CLI 2 cần Java 8+ trong PATH. Kết quả gốc nằm trong allure-results. Trước một lượt chạy mới, di chuyển kết quả cũ sang thư mục lưu trữ để tránh trộn nhiều lượt.

File Excel: outputs/Login-Test-Cases.xlsx. Nguồn đặc tả: docs/cases.json. Sáu ca dùng dữ liệu giả, không cần tài khoản thật. Các ca từ chối phải giữ trang login và có thông báo lỗi; việc chỉ ở lại URL không đủ để PASS. Nếu website không có thông báo theo yêu cầu, ca sẽ FAIL và lưu ảnh để phân tích.

Chưa có tài khoản thử nghiệm nên chưa bao phủ đăng nhập thành công, sai mật khẩu của tài khoản hợp lệ hay duy trì phiên thực tế. TC06 chỉ kiểm tra bật/tắt lựa chọn giữ đăng nhập. Không đăng nhập Google hoặc gửi yêu cầu đặt lại mật khẩu.
