const {loginTest,By,assert}=require('../support/login.cjs');
loginTest('TC02',"Để trống cả hai ô",async(page,driver)=>{
  await page.fill("","");
  await page.submit(); await page.rejected();
});
