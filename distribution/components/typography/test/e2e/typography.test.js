const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlTypographyPage = require('./pages/vl-typography.page');

describe('vl-typography', async () => {
  let vlTypographyPage;

  before(() => {
    vlTypographyPage = new VlTypographyPage(getDriver());
    return vlTypographyPage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlTypographyPage.hasWcagIssues());
  });

  it('als gebruiker kan ik de inhoud van een vl-typography zien', async () => {
    const vlTypography = await vlTypographyPage.getTypographyPTag();
    const innerHTML = await vlTypography.getAttribute('innerHTML');
    await assert.isTrue(innerHTML.indexOf('<a href="#">tempor incididunt</a>') > 0);
    await assert.isTrue(innerHTML.indexOf('<p>') > 0);
    await assert.isTrue(innerHTML.indexOf('</p>') > 0);
    await assert.eventually.equal(vlTypography.getText(), 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nLorem dolor sit amet, consectetur adipisicing elit. Deleniti, in.');
  });
});
