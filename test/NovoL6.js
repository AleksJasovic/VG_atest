'use strict'

const { By, Builder, until } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chai = require('chai');
const { ableToSwitchToFrame } = require('selenium-webdriver/lib/until');
const assert = chai.assert;
const expect = chai.expect;

describe('Selenium Tests', function () {
    let driver;
    this.timeout(30000);
    let vars;

    before(async function () {
        try {
            console.log('***', '1');
            driver = await new Builder().forBrowser('chrome').build();
            vars = {};
            console.log('***', '2');
        } catch (error) {
            console.log("Error in before : ", error)
        }
    });

    after(async function () {
        console.log('***', '3');
        await driver.quit();
        console.log('***', '4');
    });

    it('Opens L6 test page', async function () {
        try {
            console.log('***', '5');
            await driver.get("https://test.exevirtual.com/lucky6/index.php?deviceType=desktop&userUuid=AutomaticTest&sessionUuid=1e35114f-f081-4e6e-bd89-fb30b334f88b&language=sr&clientName=c2629cff41143af94bcec66d52117d75c370fb22&ccy=din");
            await driver.switchTo().frame(0);
            console.log('***', '6');
            const pageTitle = await driver.getTitle();
            console.log('***', '7');

            expect(pageTitle).to.contain('Lucky 6');


        } catch (error) {
            console.log(error);
        }


    });


    it('Quick pick', async function () {
        setTimeout(async function () {
            console.log('***', '8');
            console.log('***', '9');
            console.log('***', '10');


            const quickPick = await driver.findElement(By.xpath("//button[@id='qup']"));
            await quickPick.click();

            const quckPickSelection = await driver.findElement(By.xpath("//a[@class='randMore' and @ng-click='randomPlay(6)']/following::span[text()='6'][2]")).click();
            expect(await quckPickSelection.getText()).to.contain('6');

        }, 8000)
        await driver.sleep(11000);
    });
    it('Add To Slip', async function () {
        await driver.findElement(By.id("addBet")).click();
it('Add bet', async function() {



    const uplatiBtn = await driver.wait(until.elementLocated(By.className('uplatiBtn')), 30000, 'Timed outafter 30seconds', 5000);
    
    console.log('***','11' )   

});

    });
});