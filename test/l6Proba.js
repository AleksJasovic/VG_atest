// Generated by Selenium IDE
'use strict'

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const chrome = require('selenium-webdriver/chrome')
const chai = require('chai')
const { expect } = require('chai')

const payin = () => {

}

describe('L6 proba', async function () {

  let driver
  let vars

  beforeEach(async function () {
    vars = {}
  })
  afterEach(async function () {
    return driver.close();
  });
  it('L6 Miljanov neverovatno dobar test', async function () {

    driver = await new Builder().forBrowser('chrome').build()
    await driver.get("https://test.exevirtual.com/lucky6-test/app.php?deviceType=desktop&userUuid=AutomaticTest&sessionUuid=1e35114f-f081-4e6e-bd89-fb30b334f88b&language=sr&clientName=c2629cff41143af94bcec66d52117d75c370fb22&ccy=din")
    await driver.manage().window().setRect({ width: 1980, height: 1240 });
    await driver.manage().window().maximize();

    let dropdown = await driver.findElement(By.className("lopticeNav randomPick ng-binding"));
    await dropdown.click();

    let dropDownHolder = await driver.findElement(By.className("dropdown-content randomOpen"));
    let rand7 = await dropDownHolder.findElement(By.id("rand-play-7"));
    
    await driver.wait(until.elementIsVisible(rand7));
    rand7.click();
    
    const dodajOpkladu = await driver.findElement(By.id("addBet"));
    await dodajOpkladu.click();

    const plusCredit = await driver.findElement(By.id("plus"));
    await plusCredit.click();

    await driver.findElement(By.className("uplatiBtn")).click();

    let okBtn =  await driver.findElement(By.id("deleteFromTicketBtn"));

    await driver.wait(until.elementIsVisible(okBtn))
    await okBtn.click();

    // dodavanje nove selekcije 

    let firstBall = await driver.findElement(By.className("prvaKugla"));
    firstBall.click();

    await dodajOpkladu.click();
    await driver.findElement(By.className("uplatiBtn")).click();

    await driver.wait(until.elementIsVisible(okBtn))
    await okBtn.click();

    // dodavanje boje 

    let redBall = await driver.findElement(By.className("loptaDesno bojaPrveDve red"));
    redBall.click();

    let greenBall = await driver.findElement(By.className("loptaDesno bojaPrveDve green"));
    greenBall.click();

    let blueBall = await driver.findElement(By.className("loptaDesno bojaPrveDve blue"));
    blueBall.click();

    let purpleBall = await driver.findElement(By.className("loptaDesno bojaPrveDve purple"));
    purpleBall.click();

    await dodajOpkladu.click();
    await driver.findElement(By.className("uplatiBtn")).click();
    assert.equal(true, true);

  })

  it('L6 Miljanov neverovatno dobar test broj 2', async ()=> {

    driver = await new Builder().forBrowser('chrome').build()
    await driver.get("https://test.exevirtual.com/lucky6-test/app.php?deviceType=desktop&userUuid=AutomaticTest&sessionUuid=1e35114f-f081-4e6e-bd89-fb30b334f88b&language=sr&clientName=c2629cff41143af94bcec66d52117d75c370fb22&ccy=din")
  
    //await driver.switchTo().frame(0)
    await driver.manage().window().setRect({ width: 1980, height: 1240 });
    await driver.manage().window().maximize();

    let ball22 = await driver.findElement(By.id("22"));
    await ball22.click();

    const dodajOpkladu = await driver.findElement(By.id("addBet"));
    await dodajOpkladu.click();
    assert.equal(true, true);

  });

});
