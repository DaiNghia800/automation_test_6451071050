const {loginTest,By,assert}=require('../support/login.cjs');
loginTest('TC05',"Tài khoản không tồn tại",async(page,driver)=>{
  await page.fill("utc_automation_nonexistent_6451071050","Utc_Test_Invalid_2026!");
  await page.submit(); await page.rejected();
});
