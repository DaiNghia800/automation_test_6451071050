const {loginTest,By,assert}=require('../support/login.cjs');
const {Key,until}=require('selenium-webdriver');
loginTest('TC14',"Thử lại sau lỗi thiếu mật khẩu",async(page,driver)=>{
 await page.fill('utc_automation_nonexistent_6451071050',''); await page.submit();
 assert.match(await driver.findElement(By.css('body')).getText(),/Bạn chưa nhập mật khẩu/);
 await page.fill('utc_automation_nonexistent_6451071050','Utc_Test_Invalid_2026!'); await page.submit(); await page.rejected();
 const text=await driver.findElement(By.css('body')).getText();
 assert.match(text,/Tài khoản hoặc mật khẩu không đúng/); assert.doesNotMatch(text,/Bạn chưa nhập mật khẩu/);
});
