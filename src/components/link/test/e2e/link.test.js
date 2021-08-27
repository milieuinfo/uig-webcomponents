const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlLinkPage = require('./pages/vl-link.page');

describe('vl-link', async () => {
  let vlLinkPage;

  before(() => {
    vlLinkPage = new VlLinkPage(getDriver());
    return vlLinkPage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlLinkPage.hasWcagIssues());
  });

  it('als gebruiker kan ik de tekst van een link zien', async () => {
    const link = await vlLinkPage.getLink();
    await assert.eventually.equal(link.getText(), 'Terug naar overzicht');
  });

  it('als gebruiker kan ik de tekst van een button gestyled als link zien', async () => {
    const buttonLink = await vlLinkPage.getButtonLink();
    await assert.eventually.equal(buttonLink.getText(), 'Demo link');
  });

  it('als gebruiker wil ik het verschil kunnen zien tussen een block en een gewone link', async () => {
    const link = await vlLinkPage.getLink();
    const blockLink = await vlLinkPage.getBlockLink();
    await assert.eventually.isFalse(link.isBlock());
    await assert.eventually.isTrue(blockLink.isBlock());
  });

  it('als gebruiker wil ik het verschil kunnen zien tussen een error en een gewone link', async () => {
    const link = await vlLinkPage.getLink();
    const errorLink = await vlLinkPage.getErrorLink();
    await assert.eventually.isFalse(link.isError());
    await assert.eventually.isTrue(errorLink.isError());
  });
});
