// Generated by Selenium IDE
'use strict'

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const chrome = require('selenium-webdriver/chrome')

 

describe('L6 proba', function() {
 
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('L6 proba', async function() {
    setTimeout(async function () {
    await driver.get("https://test.exevirtual.com/lucky6/index.php?deviceType=desktop&userUuid=AutomaticTest&sessionUuid=1e35114f-f081-4e6e-bd89-fb30b334f88b&language=sr&clientName=c2629cff41143af94bcec66d52117d75c370fb22&ccy=din")
    await driver.manage().window().setRect({ width: 1540, height: 819 })
    await driver.wait(until.ableToSwitchToFrame(By.id("qup")), 1000)
    await driver.switchTo().frame(0)
    
    await driver.findElement(By.id("qup")).click()
    // {
      const elements = await driver.findElements(By.linkText("6"))
      assert(elements.length)
    // }
    await driver.findElement(By.css(".randomOpen > .randMore:nth-child(1) > span")).click()
    await driver.wait(until.elementIsEnabled(await driver.findElement(By.id("addBet"))), 5000)
    await driver.findElement(By.id("addBet")).click()
    // {
      const element2 = await driver.findElement(By.id("addBet"))
      await driver.actions({ bridge: true }).moveToElement(element2).perform()
    // }
    // {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    // }
    await driver.wait(until.elementLocated(By.css(".activeRace .additionalInfo")), 5000)
    {
      const elements = await driver.findElements(By.css(".activeRace .additionalInfo"))
      assert(elements.length)
    }
    await driver.findElement(By.css(".uplatiBtn > .ng-binding")).click()
    {
      const element = await driver.findElement(By.id("displayLast"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.id("deleteFromTicketBtn")).click()
  },40000)
})
})
