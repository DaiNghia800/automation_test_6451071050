const {loginTest,By,assert}=require('../support/login.cjs');
loginTest('TC04',"Thiếu mật khẩu",async(page,driver)=>{
  await page.fill("utc_automation_nonexistent_6451071050","");
  await page.submit(); await page.rejected();
});
