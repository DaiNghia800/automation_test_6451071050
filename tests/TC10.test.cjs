const {loginTest,By,assert}=require('../support/login.cjs');
const {Key,until}=require('selenium-webdriver');
loginTest('TC10',"Từ chối username Unicode không tồn tại",async(page,driver)=>{
 await page.fill('utc_kiểm_thử_không_tồn_tại_6451071050','Utc_Test_Invalid_2026!'); await page.submit(); await page.rejected();
 assert.match(await driver.findElement(By.css('body')).getText(),/Tài khoản hoặc mật khẩu không đúng/);
});
