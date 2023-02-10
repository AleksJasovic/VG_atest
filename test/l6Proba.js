// Generated by Selenium IDE
'use strict'

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const chrome = require('selenium-webdriver/chrome')
const chai = require('chai')


describe('L6 proba', function () {

  let driver
  let vars
  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(function () {
    //  return driver.close();
  });
  it('L6 proba', async function () {
    //setTimeout(async function () {
    await driver.get("https://test.exevirtual.com/lucky6-test/app.php?deviceType=desktop&userUuid=AutomaticTest&sessionUuid=1e35114f-f081-4e6e-bd89-fb30b334f88b&language=sr&clientName=c2629cff41143af94bcec66d52117d75c370fb22&ccy=din")

    //await driver.switchTo().frame(0)
    await driver.manage().window().setRect({ width: 1980, height: 1240 });
    await driver.manage().window().maximize();

    let dropdown = await driver.findElement(By.className("lopticeNav randomPick ng-binding"));
    await dropdown.click();

    let dropDownHolder = await driver.findElement(By.className("dropdown-content randomOpen"));
    let rand7 = await dropDownHolder.findElement(By.id("rand-play-7"));
    
    setTimeout(async () => {

      rand7.click();

      const dodajOpkladu = await driver.findElement(By.id("addBet"));
      await dodajOpkladu.click();

      const plusCredit = await driver.findElement(By.id("plus"));
      await plusCredit.click();

      await driver.findElement(By.className("uplatiBtn")).click();

    }, 500)
  });
});
  // it('dugmici levo',async function() {
  //   await driver.findElement(By.className('dugmiciLevoBtn prvaKugla')).click();
  // });




  //await driver.wait(until.ableToSwitchToFrame(By.className("lopticeNav randomPick")), 1000);
  //await driver.findElement(By.className("dugmiciLevoBtn prvaKugla")).click();
    // {
    //   const elements = await driver.findElements(By.linkText("6"))
    //   assert(elements.length)
    // // }
    //
    // await driver.wait(until.elementIsEnabled(await driver.findElement(By.id("addBet"))), 5000)
    // // {
    //   const element2 = await driver.findElement(By.id("addBet"))
    //   await driver.actions({ bridge: true }).moveToElement(element2).perform()
    // // }
    // // {
    //   const element = await driver.findElement(By.CSS_SELECTOR, "body")
    //   await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    // // }
    // await driver.wait(until.elementLocated(By.css(".activeRace .additionalInfo")), 5000)
    // {
    //   const elements = await driver.findElements(By.css(".activeRace .additionalInfo"))
    //   assert(elements.length)
    // }
    // {
    //   const element = await driver.findElement(By.id("displayLast"))
    //   await driver.actions({ bridge: true }).moveToElement(element).perform()
    // }
    // await driver.findElement(By.id("deleteFromTicketBtn")).click()
