const {loginTest,By,assert}=require('../support/login.cjs');
const {Key,until}=require('selenium-webdriver');
loginTest('TC07',"Chuyển từ username sang password bằng Tab",async(page,driver)=>{
 const username=await page.username(); await username.click(); await username.sendKeys('utc_automation_nonexistent_6451071050'); await page.pause();
 await username.sendKeys(Key.TAB); await page.pause();
 assert.equal(await driver.switchTo().activeElement().getAttribute('name'),'userpwd');
 assert.equal(await username.getAttribute('value'),'utc_automation_nonexistent_6451071050');
});
