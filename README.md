# Selenium Login UTC

Node.js 20.19+ (khuyên dùng 22 LTS hoặc mới hơn), Chrome. Chạy `npm ci`, sau đó `npm test` để quan sát Chrome chạy tuần tự. Mặc định mỗi thao tác dừng 900 ms. Có thể đặt `$env:STEP_DELAY_MS='1500'` trong PowerShell.

Chạy một ca: `npm run test:one -- tests/TC01.test.cjs`. Chạy ẩn nếu cần: `$env:HEADLESS='1'`. Mỗi ca tạo browser mới và đóng sau khi lưu ảnh trong artifacts và Allure. Selenium Manager tự tìm/tải driver; có thể đặt CHROMEDRIVER và CHROME_BINARY nếu cần dùng driver/browser cài sẵn.

Report: `npm run report`, sau đó `npm run report:open`. Dự án dùng Allure Report 3 chạy bằng Node.js, không cần Java. Cài theo lockfile với npm ci --legacy-peer-deps. Kết quả gốc nằm trong allure-results. npm test tự chuyển kết quả cũ vào artifacts/history để mỗi report chỉ chứa lượt chạy mới.

File Excel: outputs/Login-Test-Cases.xlsx. Nguồn đặc tả: docs/cases.json. Sáu ca dùng dữ liệu giả, không cần tài khoản thật. Các ca từ chối phải giữ trang login và có thông báo lỗi; việc chỉ ở lại URL không đủ để PASS. Nếu website không có thông báo theo yêu cầu, ca sẽ FAIL và lưu ảnh để phân tích.

Chưa có tài khoản thử nghiệm nên chưa bao phủ đăng nhập thành công, sai mật khẩu của tài khoản hợp lệ hay duy trì phiên thực tế. TC06 chỉ kiểm tra bật/tắt lựa chọn giữ đăng nhập. Không đăng nhập Google hoặc gửi yêu cầu đặt lại mật khẩu.

Đã kiểm tra ngày 08/10/2026: 6/6 test PASS trên Chrome hiển thị. Allure report xuất thành công, có kết quả và ảnh chụp. File Excel chứa kết quả của lượt kiểm tra này; không tự đổi khi bạn chạy lại. Kết quả mới xem trong Allure.

Tài liệu Allure: https://allurereport.org/docs/v3/install/ và https://allurereport.org/docs/mocha-configuration/.
