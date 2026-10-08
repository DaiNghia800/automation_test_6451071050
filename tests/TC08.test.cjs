const {loginTest,By,assert}=require('../support/login.cjs');
const {Key,until}=require('selenium-webdriver');
loginTest('TC08',"Submit đăng nhập bằng phím Enter",async(page,driver)=>{
 await page.fill('utc_automation_nonexistent_6451071050','Utc_Test_Invalid_2026!');
 const form=await driver.findElement(By.css('form'));
 await (await page.password()).sendKeys(Key.ENTER);
 await driver.wait(until.stalenessOf(form),15000);
 await driver.wait(until.elementLocated(By.name('username')),15000); await page.pause();
 await page.rejected(); assert.match(await driver.findElement(By.css('body')).getText(),/Tài khoản hoặc mật khẩu không đúng/);
});
