'use strict';

const { Builder, By, until, Key } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chrome = require('selenium-webdriver/chrome');

describe('DemoQA test', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });
    after(function () {
        return driver.quit();
    });

    it('Open demoqua.com homepage', async function () {
        await driver.get('https://demoqa.com/');
        expect(await driver.getCurrentUrl()).to.eq('https://demoqa.com/');
    });

    it('Opens Elements page', async function () {
        const elementsPage = await driver.findElement(
            By.xpath('//h5[contains(., "Elements")]')
        );
        await elementsPage.click();

        expect(await driver.findElement(By.className('main-header')).getText()).to.eq('Elements');
        expect(await driver.getCurrentUrl()).to.eq('https://demoqa.com/elements');
    });

    it('Opens TextBox page, fills the form, and submits', async function () {
        const textBoxPage = await driver.findElement(By.id('item-0'));
        await textBoxPage.click();

        expect(await driver.findElement(By.className('main-header')).getText()).to.contain('Text Box');
        
        const fillUsername = 'John Doe';
        const fillUserEmail = 'john.doe@example.org';
        const fillCurrentAdress = 'Unknown rd. 167 apt 26';
        const fillPermanentAddress = 'Unknown rd. 167 apt 26';

        const fullname = await driver.findElement(By.id('userName'));
        await fullname.sendKeys(fillUsername);
        const email = await driver.findElement(By.id('userEmail'));
        await email.sendKeys(fillUserEmail);
        const currentAddress = await driver.findElement(By.id('currentAddress'));
        await currentAddress.sendKeys(fillCurrentAdress);
        const permanentAddress = await driver.findElement(By.id('permanentAddress'));
        await permanentAddress.sendKeys(fillPermanentAddress);
        const buttonSubmit = await driver.findElement(By.id('submit')).click();
        const output = await driver.findElement(By.id('output'));
        expect(await output.isDisplayed()).to.eq(true);

        const outName = await output.findElement(By.id('name'));
        const outEmail = await output.findElement(By.id('email'));
        const outCurrentAdress = await output.findElement(By.id('currentAddress'));
        const outPermanentAddress = await output.findElement(By.id('permanentAddress'));

        expect(await outName.getText()).to.contain(fillUsername);
        expect(await outEmail.getText()).to.contain(fillUserEmail);
        expect(await outCurrentAdress.getText()).to.contain(fillCurrentAdress);
        expect(await outPermanentAddress.getText()).to.contain(fillPermanentAddress);
    });
    it('Opens Radio Button page, and chooses', async function () {
        const radioButton = await driver.findElement(By.id('item-2'));
        await radioButton.click();

        expect(await driver.findElement(By.className('main-header')).getText()).to.contain('Radio Button');

        const selectYes = await driver.findElement(By.xpath('//label[contains(., "Yes")]'));
        await selectYes.click();

        let message = await driver.findElement(By.className('text-success'));
        expect(await message.getText()).to.contain('Yes');

        const selectImpressive = await driver.findElement(By.xpath("//label[@for='impressiveRadio']"));
        await selectImpressive.click();

        message = await driver.findElement(By.className('text-success'));

        expect(await message.getText()).to.contain('Impressive');

    });
    it('Tests dynamic properties', async function() {
        const dynamicProperties = await driver.findElement(By.id('item-8'));
        await dynamicProperties.click();

       expect(await driver.findElement(By.className('main-header')).getText()).to.contain('Dynamic Properties');

       const buttonEnableAfter = await driver.findElement(By.id('enableAfter'));
       await driver.wait(until.elementIsEnabled(buttonEnableAfter));
       await buttonEnableAfter.click();

       expect(await buttonEnableAfter.isEnabled()).to.eq(true);

       const buttonVisibleAfter = await driver.findElement(By.id('visibleAfter'));
       await driver.wait(until.elementIsVisible(buttonVisibleAfter));

       expect(await buttonVisibleAfter.isDisplayed()).to.eq(true);

    });
    it('Tests web tables', async function() {
        const webTables = await driver.findElement(By.id('item-3'));
        await webTables.click();

        expect(await driver.getCurrentUrl()).to.contain('https://demoqa.com/webtables');

        const edit = await driver.findElement(By.id('edit-record-1'));
        await edit.click();

        const registrationForm = await driver.findElement(By.id('registration-form-modal'));
        await driver.wait(until.elementIsVisible(registrationForm));

        expect(await registrationForm.isDisplayed()).to.eq(true);

        const salary = await driver.findElement(By.id('salary'));
        const oldSalary = await salary.getAttribute('value');
        const newSalary = Number(oldSalary) + 1000;

        await salary.sendKeys( Key.chord(Key.CONTROL, 'a'),
        Key.DELETE,
        newSalary);

        const submit = await driver.findElement(By.id('submit'));
        await submit.click();

        const row = await driver.findElement(By.xpath("//div[@role='row' and contains(., 'Cierra')]"));
        const cell = await row.findElement(By.xpath("//div[@role='gridcell'][5]"));

        expect(await cell.getText()).to.eq(newSalary.toString());

        it('Test Alerts', async function() {
        await driver.get('https://demoqa.com/alerts');
        const alertBtn = await driver.findElement(By.id('item-1'));
        await alertBtn.click();
        await driver.wait(until.alertIsPresent());

        const alert = await driver.switchTo().alert();
        expect(await alert.getText()).to.contain('You clicked');
        });

        








        


    });
});    