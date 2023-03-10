
'use strict'

const { Builder, By, Key, until } = require('selenium-webdriver')
const webdriver = require('selenium-webdriver');

const assert = require('assert')
const chrome = require('selenium-webdriver/chrome');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;


chai.use(chaiAsPromised);


describe('L6 proba', async function () {
 let driver
  let vars
  this.timeout(70000);

  before(async function () {
    vars = {}
    driver = await new Builder().forBrowser('chrome').build();
    
    
  
  })
  after(function () {
    return driver.quit();
  });

  it('Otvaranje Lucky6 stranice', async function() {
    await driver.get("https://test.exevirtual.com/lucky6-test/app.php?deviceType=desktop&userUuid=231f806f-82db-4631-8a3f-65db37338d42&sessionUuid=57b4cd6c-c492-49ba-a356-1980bc3cea6e&language=sr&clientName=56d6cf41a1013b10c0a70ef7558478d852ff28bb&ccy=din");
    await driver.manage().window().maximize();
    const title = await driver.getTitle();
    expect(title).to.contain('Lucky6');
  });

  it('Biranje Nasumicnih 7 brojeva', async function () {
    
    let randChoiceClass = await driver.findElement(By.className("randomChoice"));
    let nasumicnih = await randChoiceClass.findElement(By.className("lopticeNav randomPick ng-binding"));

    await nasumicnih.click();

    

   

    let dropDownHolder = await driver.findElement(By.className("dropdown-content randomOpen"));
    await driver.wait(() =>dropDownHolder.isDisplayed(), 6000);

    assert(await dropDownHolder.isDisplayed());

    let rand7 = await dropDownHolder.findElement(By.id("rand-play-7"));

    
    await driver.wait(until.elementIsVisible(rand7), 20000);
    rand7.click();

    //const classIme = await driver.findElement(By.className('errorMessage ng-hide'));
    //const dodajOpkladuZutoDugme = await classIme.findElement(By.className('ng-binding activeBet'));
    //await driver.wait(until.elementIsVisible(dodajOpkladuZutoDugme) ,20000);
    //dodajOpkladuZutoDugme.click(); 
     

    const dodajOpkladu = await driver.findElement(By.id("addBet"));
    await dodajOpkladu.click();
    
    
    const plusCredit = await driver.findElement(By.id("plus"));
    await plusCredit.click();

  });
      

    it('Odabrana selekcija i podignut ulog', async function() {
      let randChoiceClass = await driver.findElement(By.className("randomChoice"));
      let nasumicnih = await randChoiceClass.findElement(By.className("lopticeNav randomPick ng-binding"));

      await nasumicnih.click();
    let dropDownHolder = await driver.findElement(By.className("dropdown-content randomOpen"));
    await driver.wait(() =>dropDownHolder.isDisplayed(), 6000);

   let rand7 = await dropDownHolder.findElement(By.id("rand-play-7"));

    
    await driver.wait(until.elementIsVisible(rand7), 20000);
    rand7.click();

    const dodajOpkladu = await driver.findElement(By.id("addBet"));
    await dodajOpkladu.click();
    
    const plusCredit = await driver.findElement(By.id("plus"));
    await plusCredit.click();
    
    
  });
    
    it('Boja prve kuglice', async function() {
      let redBall = await driver.findElement(By.className("loptaDesno bojaPrveDve red"));
    redBall.click();

    let greenBall = await driver.findElement(By.className("loptaDesno bojaPrveDve green"));
    greenBall.click();
  


    let blueBall = await driver.findElement(By.className("loptaDesno bojaPrveDve blue"));
    blueBall.click();

    let purpleBall = await driver.findElement(By.className("loptaDesno bojaPrveDve purple"));
    purpleBall.click();

    const dodajOpkladu = await driver.findElement(By.id("addBet"));
    
     await dodajOpkladu.click();
   });

    it('Prva kuglica/Vise', async function() {

    const vise185Dugme = await driver.findElements(By.className('prvaKugla'));
    const vise185DugmeVise = vise185Dugme[1];
    await vise185DugmeVise.click();

    const vise185DugmeViseZuto = await driver.findElement(By.className('dugmiciLevoBtn prvaKugla activeButton'));
    expect(await vise185DugmeViseZuto.isDisplayed()).to.be.true;

    const dodajOpkladu = await driver.findElement(By.id("addBet"));

    await dodajOpkladu.click();
  });

    it('Zbir prvih pet', async function() {
      const elements = await driver.findElements(By.className('zbirUprvihPet'));
      const element = elements[0]; 
      await element.click();

    const dodajOpkladu = await driver.findElement(By.id("addBet"));

    await dodajOpkladu.click();
  });

  it ('sve boje', async function () {
    const sveBojeBtn = await driver.findElement(By.className('lopticeNav deleteTicket allColorsButton ng-binding'));
    await sveBojeBtn.click();

  const div = await driver.findElement(By.className('lopta loptaBgZuta yellowRight ball6'));
  const divStyle = await div.findElement(By.css('p[style="color: rgb(0, 0, 0);"]'));

  const style = await divStyle.getAttribute('style');
  expect(style).to.contain('color: rgb(0, 0, 0);');

   

    const dodajOpkladu = await driver.findElement(By.id("addBet"));
    await dodajOpkladu.click();

  });

    //it('biranje broja(broj u prvih 5', async function() {

    //const dvadesetTri = await driver.findElement(By.className('lopta loptaBgNarandzasta orangeRight ball23'));
    //await dvadesetTri.click();


    //const brojuprvihPet = await driver.findElements(By.className("brojUprvihPet"));
    //const brojuprvihPetDa = brojuprvihPet[0];
   // await brojuprvihPetDa.click();
    
   // const dodajOpkladu = await driver.findElement(By.id("addBet"));
    //await dodajOpkladu.click();
  //});

   it('kompletirana boja', async function() {

    const kompletiranaBoja = await driver.findElements(By.className('kompBoja'));
    const kompletiranaBojaNE = kompletiranaBoja[1];
    await kompletiranaBojaNE.click();

    const kompletiranaBojaNEZuto = await driver.findElement(By.className('dugmiciLevoBtn kompBoja activeButton'));
    expect(await kompletiranaBojaNEZuto.isDisplayed()).to.be.true;

    const dodajOpkladu = await driver.findElement(By.id("addBet"));
    await dodajOpkladu.click();

  }); 
  

   it('Uplata', async function () {
     await driver.findElement(By.className("uplatiBtn")).click();

     setTimeout(async () => {
      const okBtn = await driver.findElement(By.id("deleteFromTicketBtn"));
      
      expect(await okBtn.isDisplayed()).to.be.true;
    }, 3000);

    });

   it('Status uplacenog tiketaOK', async function(){
    let okBtn =  await driver.findElement(By.id("deleteFromTicketBtn"));
    await driver.wait(until.elementIsVisible(okBtn));
    await okBtn.click();
  }); 
});

    //const okBtnIsVisible = await okBtn.isDisplayed();
    //assert.strictEqual(okBtnIsVisible, true, 'Expected okBtn to be displayed');

    
 // },3000);

  


