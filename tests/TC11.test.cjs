const {loginTest,By,assert}=require('../support/login.cjs');
const {Key,until}=require('selenium-webdriver');
loginTest('TC11',"Mở trang quên mật khẩu từ login",async(page,driver)=>{
 await driver.findElement(By.css('a[href="/Login/GetPass"]')).click();
 await driver.wait(until.elementLocated(By.name('email')),15000); await page.pause();
 assert.equal(new URL(await driver.getCurrentUrl()).pathname.toLowerCase(),'/login/getpass');
 assert.match(await driver.getTitle(),/Lấy lại mật khẩu/);
 assert.equal(await driver.findElement(By.name('email')).isDisplayed(),true);
 assert.equal(await driver.findElement(By.name('captcha')).isDisplayed(),true);
});
