const {loginTest,By,assert}=require('../support/login.cjs');
const {Key,until}=require('selenium-webdriver');
loginTest('TC12',"Kiểm tra liên kết đăng nhập e-mail UTC",async(page,driver)=>{
 const link=await driver.findElement(By.css('a.button'));
 assert.equal(await link.isDisplayed(),true); assert.match(await link.getText(),/Đăng nhập bằng e-mail UTC/);
 const href=new URL(await link.getAttribute('href'));
 assert.equal(href.protocol,'https:'); assert.equal(href.hostname,'accounts.google.com');
 assert.equal(href.searchParams.get('response_type'),'code'); assert.ok(href.searchParams.get('client_id'));
 const callback=new URL(href.searchParams.get('redirect_uri'));
 assert.equal(callback.hostname,new URL(await driver.getCurrentUrl()).hostname);
 assert.equal(callback.pathname.toLowerCase(),'/login');
 assert.equal(await driver.findElement(By.name('username')).isDisplayed(),true);
});
