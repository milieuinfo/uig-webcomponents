const {
  assert,
  getDriver,
} = require("../../../../../test/index.js").Test.Setup;
const VlContactCardPage = require("./contact-card.page.js");
const VlPropertiesList = require("../../../properties/test/e2e/properties.js")
  .VlPropertiesList;

console.log(VlPropertiesList);

describe("vl-contact-card", async () => {
  let driver;
  let vlContactCardPage;

  before(() => {
    driver = getDriver();
    vlContactCardPage = new VlContactCardPage(driver);
    return vlContactCardPage.load();
  });

  // it("WCAG", async () => {
  //   await assert.eventually.isFalse(vlContactCardPage.hasWcagIssues());
  // });

  it("als gebruiker kan ik de contact card info bekijken", async () => {
    const contactCard = await vlContactCardPage.getContactCard();
    const infoblock = await contactCard.getInfoblockElement();
    const title = await infoblock.getTitleSlotElements();
    await assert.eventually.equal(
      title[0].getText(),
      "Departement Onderwijs en Vorming"
    );
  });

  it("als gebruiker kan ik de contact card properties bekijken", async () => {
    const contactCard = await vlContactCardPage.getContactCard();
    const propertiesElement = await contactCard.getPropertiesElement();
    const propertiesChildren = await propertiesElement.getSlotElements();
    assert.lengthOf(propertiesChildren, 1);
    const propertiesList = await new VlPropertiesList(
      driver,
      propertiesChildren[0]
    );
    const properties = await propertiesList.getProperties();
    assert.lengthOf(properties, 4);
    const adresProperty = properties[0];
    await assert.eventually.equal(adresProperty.term.getText(), "Adres");
    await assert.eventually.include(
      adresProperty.value.getText(),
      "Hendrik Consciencegebouw"
    );
    await assert.eventually.include(
      adresProperty.value.getText(),
      "Koning Albert II-laan 15"
    );
    await assert.eventually.include(
      adresProperty.value.getText(),
      "1210 Brussel"
    );
    await assert.eventually.include(
      adresProperty.value.getText(),
      "Routeplanner"
    );
    const phoneProperty = properties[1];
    await assert.eventually.equal(phoneProperty.term.getText(), "Telefoon");
    await assert.eventually.include(
      phoneProperty.value.getText(),
      "02 553 72 02"
    );
    await assert.eventually.include(
      phoneProperty.value.getText(),
      "(Onthaal Consciencegebouw)"
    );
    await assert.eventually.include(phoneProperty.value.getText(), "1700");
    await assert.eventually.include(
      phoneProperty.value.getText(),
      "(Infolijn Onderwijs)"
    );
    const mailProperty = properties[2];
    await assert.eventually.equal(mailProperty.term.getText(), "E-mail");
    await assert.eventually.include(
      mailProperty.value.getText(),
      "onderwijs.vlaanderen@vlaanderen.be"
    );
    const websiteProperty = properties[3];
    await assert.eventually.equal(websiteProperty.term.getText(), "Website");
    await assert.eventually.include(
      websiteProperty.value.getText(),
      "http://onderwijs.vlaanderen.be"
    );
  });
});
