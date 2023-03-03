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
    afterEach( function () {
      return driver.close();
    });
    it('L6 proba', async function () {
        await driver.get("https://test.exevirtual.com/lucky6-test/app.php?deviceType=desktop&userUuid=AutomaticTest&sessionUuid=1e35114f-f081-4e6e-bd89-fb30b334f88b&language=sr&clientName=c2629cff41143af94bcec66d52117d75c370fb22&ccy=din")
        expect(await driver.getCurrentUrl()).to.eq("https://test.exevirtual.com/lucky6-test/app.php?deviceType=desktop&userUuid=AutomaticTest&sessionUuid=1e35114f-f081-4e6e-bd89-fb30b334f88b&language=sr&clientName=c2629cff41143af94bcec66d52117d75c370fb22&ccy=din")
          await driver.manage().window().setRect({ width: 1540, height: 1500 });  
  });
});
