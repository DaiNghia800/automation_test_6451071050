const {loginTest,By,assert}=require('../support/login.cjs');
const {Key,until}=require('selenium-webdriver');
loginTest('TC09',"Từ chối dữ liệu chỉ có khoảng trắng",async(page,driver)=>{
 await page.fill('   ','   '); await page.submit(); await page.rejected();
});
