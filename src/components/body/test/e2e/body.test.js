const {assert, getDriver, By} = require('vl-ui-core').Test.Setup;
const VlBodyPage = require('./pages/vl-body.page');

describe('vl-body', async () => {
  let vlBodyPage;

  before(() => {
    vlBodyPage = new VlBodyPage(getDriver());
    return vlBodyPage.load();
  });

  it('als gebruiker kan ik de inhoud van een body element zien', async () => {
    const body = await vlBodyPage.getBody();
    const p = await body.findElement(By.css('p'));
    await assert.eventually.equal(p.getText(), 'Door gebruik te maken van het native vl-body element incl. stijl zal er een minimum aan huisstijl geladen worden.');
  });
});
