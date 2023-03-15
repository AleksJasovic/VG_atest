'use strict'

const { Builder, By, Key, until } = require('selenium-webdriver')
//const assert = require('assert')//
const chrome = require('selenium-webdriver/chrome')
const chai = require('chai');
const  expect = chai.expect;

const payin = () => {

}
var driver;

describe('L6 proba', async function () {
  let vars;

  beforeEach(async function () {
    vars = {}
    //driver = await new Builder().forBrowser('chrome').build();
    const chromeOptions = new chrome.Options();

     chromeOptions.addArguments("--start-maximized");

    //  let service = new chrome.ServiceBuilder("C:\\Users\\Korisnik\\Desktop\\VG_atest\\VG_atest\\chromedriver.exe").build();
     chrome.setDefaultService(service);
   
  });
   //driver = await new Builder()
  //.forBrowser("chrome")
  //.withCapabilities({
   // browserName: "chrome",
  //  chromeOptions: chromeOptions
  //})
  //.setChromeService(new chrome.ServiceBuilder()
  //  .setChromeDriverPath("C:\\Users\\Korisnik\\Desktop\\VG_atest\\VG_atest\\chromedriver.exe")
  //  .build())
  //.build();

   // await driver.get("https://test.exevirtual.com/lucky6-test/index.php?deviceType=desktop&userUuid=231f806f-82db-4631-8a3f-65db37338d42&sessionUuid=57b4cd6c-c492-49ba-a356-1980bc3cea6e&language=sr&clientName=56d6cf41a1013b10c0a70ef7558478d852ff28bb&ccy=din")
   
    //await driver.switchTo().frame(0);

  })

  afterEach(async function () {
    await driver.close();
  });

  it('L6 Miljanov neverovatno dobar test', async function () {
    //this.timeout(60000);
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://test.exevirtual.com/lucky6-test/app.php?deviceType=desktop&userUuid=231f806f-82db-4631-8a3f-65db37338d42&sessionUuid=57b4cd6c-c492-49ba-a356-1980bc3cea6e&language=sr&clientName=56d6cf41a1013b10c0a70ef7558478d852ff28bb&ccy=din")
   
    await driver.switchTo().frame(0);



    let dropdown = await driver.findElement(By.className("lopticeNav randomPick ng-binding"));

    await driver.wait(until.elementIsVisible(dropdown),30000);
    await dropdown.click();

    

    //let dropDownHolder = await driver.findElement(By.className("dropdown-content randomOpen"));

   // await new Promise(resolve => setTimeout(resolve, 25000));

    //expect(await dropDownHolder.isDisplayed()).to.eq(true);
  
    
   // let rand7 = await dropDownHolder.findElement(By.id("rand-play-7"));

    
    //await driver.wait(until.elementIsVisible(rand7), 20000);
    //rand7.click();
    let purpleBall = await driver.findElement(By.className("loptaDesno bojaPrveDve purple"));
    await driver.wait(until.elementIsVisible(purpleBall),3000);
    await purpleBall.click();

    const filledPurpleball = await driver.findElement(By.css('[style="background-image: url("https://test.exevirtual.com/lucky6-test/slike/puneLoptice/ball_PURPLE.png");"]'));
    filledPurpleball.isElementPresent().then(function(present) {
      if (present) {
        console.log("Element is present on the page");
      } else {
        console.log("Element is not present on the page");
      }
    });
    const dodajOpkladu = await driver.findElement(By.id("addBet"));
  

   // const plusCredit = await driver.findElement(By.id("plus"));
   // await plusCredit.click();

    //await driver.findElement(By.className("uplatiBtn")).click();

    //let okBtn =  await driver.findElement(By.id("deleteFromTicketBtn"));

   // await driver.wait(until.elementIsVisible(okBtn))
    //await okBtn.click();

    // dodavanje nove selekcije 

    //let firstBall = await driver.findElement(By.className("prvaKugla"));
    //firstBall.click();

    //await dodajOpkladu.click();
    //await driver.findElement(By.className("uplatiBtn")).click();

    //await driver.wait(until.elementIsVisible(okBtn))
    //await okBtn.click();

    // dodavanje boje 

   // let redBall = await driver.findElement(By.className("loptaDesno bojaPrveDve red"));
   // redBall.click();

   // let greenBall = await driver.findElement(By.className("loptaDesno bojaPrveDve green"));
    //greenBall.click();

   // let blueBall = await driver.findElement(By.className("loptaDesno bojaPrveDve blue"));
   // blueBall.click();

    

    await dodajOpkladu.click();
    const uplati = await driver.findElement(By.className("uplatiBtn"));
    await driver.wait(until.elementIsVisible(uplati),30000).click();
    const okBtn= await driver.findElement(By.id('deleteFromTicketBtn'));
    await driver.wait(until.elementIsVisible(okBtn),30000).click();

    const prozor = await driver.findElement(By.className('pushNot openNot'));
    const isVisible = await prozor.isDisplayed();
    expect(isVisible).to.be.true;
});
