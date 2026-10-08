const {loginTest,By,assert}=require('../support/login.cjs');
loginTest('TC03',"Thiếu tên đăng nhập",async(page,driver)=>{
  await page.fill("","Utc_Test_Invalid_2026!");
  await page.submit(); await page.rejected();
});
