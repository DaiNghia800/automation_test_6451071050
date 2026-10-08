'use strict';
const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const allure = require('allure-js-commons');
const delay = Number(process.env.STEP_DELAY_MS || 900);
if (!Number.isFinite(delay) || delay < 0) throw new Error('STEP_DELAY_MS must be >= 0');
class LoginPage {
  constructor(driver) { this.driver = driver; }
  async open() {
    await this.driver.get(process.env.BASE_URL || 'https://vanphongdientu.utc.edu.vn/Login');
    await this.driver.wait(until.elementLocated(By.name('username')),15000);
    await this.pause();
  }
  async pause() { await this.driver.sleep(delay); }
  username() { return this.driver.findElement(By.name('username')); }
  password() { return this.driver.findElement(By.name('userpwd')); }
  async fill(username,password) {
    for (const [element,value] of [[await this.username(),username],[await this.password(),password]]) {
      await element.clear(); if(value) await element.sendKeys(value); await this.pause();
    }
  }
  async submit() {
    const old = await this.driver.findElement(By.css('form'));
    await this.driver.findElement(By.css('input[type="submit"]')).click();
    await this.driver.wait(until.stalenessOf(old),15000);
    await this.driver.wait(until.elementLocated(By.name('username')),15000);
    await this.pause();
  }
  async rejected() {
    assert.match(await this.driver.getCurrentUrl(),/\/Login(?:[/?#]|$)/i);
    assert.equal(await this.driver.findElement(By.css('input[type="submit"]')).isDisplayed(),true);
    const body = await this.driver.findElement(By.css('body')).getText();
    assert.match(body,/sai|không.*đúng|không.*tồn tại|không.*hợp lệ|thất bại|vui lòng|nhập.*(?:tài khoản|mật khẩu|tên đăng nhập)|invalid|incorrect/i,'Phải có thông báo từ chối hoặc yêu cầu nhập dữ liệu');
    await allure.attachment('Thông báo thực tế',body,'text/plain');
  }
}
function loginTest(id,title,body) {
  describe(`${id} - ${title}`,function() {
    let driver,page;
    beforeEach(async function() {
      await allure.epic('Văn phòng điện tử UTC'); await allure.feature('Login'); await allure.story(id);
      const options = new chrome.Options().addArguments('--start-maximized');
      if(process.env.HEADLESS==='1') options.addArguments('--headless=new');
      if(process.env.CHROME_BINARY) options.setChromeBinaryPath(process.env.CHROME_BINARY);
      const builder = new Builder().forBrowser('chrome').setChromeOptions(options);
      if(process.env.CHROMEDRIVER) builder.setChromeService(new chrome.ServiceBuilder(process.env.CHROMEDRIVER));
      driver = await builder.build();
      await driver.manage().setTimeouts({implicit:0,pageLoad:30000,script:15000});
      page = new LoginPage(driver); await page.open();
    });
    it(title,async function() { await body(page,driver); });
    afterEach(async function() {
      if(!driver) return;
      try {
        const screenshot = Buffer.from(await driver.takeScreenshot(),'base64');
        await fs.mkdir('artifacts',{recursive:true});
        await fs.writeFile(path.join('artifacts',`${id}.png`),screenshot);
        await allure.attachment(`${id} - screenshot`,screenshot,'image/png');
        await allure.attachment('URL',await driver.getCurrentUrl(),'text/plain');
      } catch(error) { console.warn('Không chụp được bằng chứng:',error.message); }
      finally { await driver.quit(); }
    });
  });
}
module.exports = {loginTest,By,assert};
