const {loginTest,By,assert}=require('../support/login.cjs');
loginTest('TC06',"Bật và tắt giữ đăng nhập",async(page,driver)=>{
  const checkbox=await driver.findElement(By.id('persistent'));
  assert.equal(await checkbox.isSelected(),false);
  const label=await driver.findElement(By.css('label.check[for="persistent"]'));
  await label.click(); await page.pause(); assert.equal(await checkbox.isSelected(),true);
  await label.click(); await page.pause(); assert.equal(await checkbox.isSelected(),false);
});
