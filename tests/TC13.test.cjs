const {loginTest,By,assert}=require('../support/login.cjs');
const {Key,until}=require('selenium-webdriver');
loginTest('TC13',"Quay lại login từ trang quên mật khẩu",async(page,driver)=>{
 await driver.findElement(By.css('a[href="/Login/GetPass"]')).click();
 await driver.wait(until.elementLocated(By.name('email')),15000); await page.pause();
 await driver.findElement(By.css('.helps a[href="/Login"]')).click();
 await driver.wait(until.elementLocated(By.name('username')),15000); await page.pause();
 assert.equal(new URL(await driver.getCurrentUrl()).pathname.toLowerCase(),'/login');
 assert.equal(await (await page.username()).isDisplayed(),true); assert.equal(await (await page.password()).isDisplayed(),true);
 assert.equal(await driver.findElement(By.css('input[type="submit"]')).isDisplayed(),true);
});
