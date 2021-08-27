const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlTitlesPages = require('./pages/vl-titles.page');

describe('vl-titles', async () => {
  let vlTitlesPage;

  before(() => {
    vlTitlesPage = new VlTitlesPages(getDriver());
    return vlTitlesPage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlTitlesPage.hasWcagIssues());
  });

  it('als gebruiker kan ik een h1, h2, h3, h4, h5 en h6 zien', async () => {
    const testStandardTitle = async (title, headerNumber) => {
      await assert.eventually.isTrue(title.isH(headerNumber));
      await assert.eventually.isFalse(title.isSansFont());
      await assert.eventually.isFalse(title.hasBorder());
      await assert.eventually.isFalse(title.isAlt());
      await assert.eventually.equal(title.getText(), `Dit is een h${headerNumber} titel`);
    };

    await testStandardTitle(await vlTitlesPage.getH1(), 1);
    await testStandardTitle(await vlTitlesPage.getH2(), 2);
    await testStandardTitle(await vlTitlesPage.getH3(), 3);
    await testStandardTitle(await vlTitlesPage.getH4(), 4);
    await testStandardTitle(await vlTitlesPage.getH5(), 5);
    await testStandardTitle(await vlTitlesPage.getH6(), 6);
  });

  it('als gebruiker kan ik een h1 zien met sans-serif font', async () => {
    const title = await vlTitlesPage.getSansH1();
    await assert.eventually.isTrue(title.isSansFont());
    await assert.eventually.isFalse(title.hasBorder());
    await assert.eventually.isFalse(title.isAlt());
    await assert.eventually.isFalse(title.hasNoSpaceBottom());
  });

  it('als gebruiker kan ik een h1 zien die onderlijnd wordt', async () => {
    const title = await vlTitlesPage.getBorderH1();
    await assert.eventually.isFalse(title.isSansFont());
    await assert.eventually.isTrue(title.hasBorder());
    await assert.eventually.isFalse(title.isAlt());
    await assert.eventually.isFalse(title.hasNoSpaceBottom());
  });

  it('als gebruiker kan ik een alternatieve h4 zien', async () => {
    const title = await vlTitlesPage.getAltH4();
    await assert.eventually.isFalse(title.isSansFont());
    await assert.eventually.isFalse(title.hasBorder());
    await assert.eventually.isTrue(title.isAlt());
    await assert.eventually.isFalse(title.hasNoSpaceBottom());
  });

  it('als gebruiker kan ik een h4 zonder space zien', async () => {
    const title = await vlTitlesPage.getNoSpaceBottomH4();
    await assert.eventually.isFalse(title.isSansFont());
    await assert.eventually.isFalse(title.hasBorder());
    await assert.eventually.isFalse(title.isAlt());
    await assert.eventually.isTrue(title.hasNoSpaceBottom());
  });
});
