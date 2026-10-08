const {loginTest,By,assert}=require('../support/login.cjs');
loginTest('TC01','Hiển thị form đăng nhập',async(page,driver)=>{
  assert.equal(await (await page.username()).isDisplayed(),true);
  assert.equal(await (await page.password()).isDisplayed(),true);
  assert.equal(await (await page.password()).getAttribute('type'),'password');
  assert.equal(await driver.findElement(By.css('input[type="submit"]')).isDisplayed(),true);
});
