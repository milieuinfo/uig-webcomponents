const {
  assert,
  getDriver,
} = require("../../../../../test/index.js").Test.Setup;
const VlDocumentPage = require("./document.page.js");

describe("vl-document", async () => {
  let vlDocumentPage;

  before(() => {
    vlDocumentPage = new VlDocumentPage(getDriver());
    return vlDocumentPage.load();
  });

  // it("WCAG", async () => {
  //   await assert.eventually.isFalse(vlDocumentPage.hasWcagIssues());
  // });

  it("Als gebruiker kan ik het document type bekijken", async () => {
    const document = await vlDocumentPage.getDocument();
    await assert.eventually.equal(document.getType(), "PDF");
  });

  it("Als gebruiker kan ik de document titel bekijken", async () => {
    const document = await vlDocumentPage.getDocument();
    await assert.eventually.equal(
      document.getTitle(),
      "Hubert en Jan van Eyck, Vlaamse Primitieven"
    );
  });

  it("Als gebruiker kan ik de document metadata bekijken", async () => {
    const document = await vlDocumentPage.getDocument();
    await assert.eventually.equal(document.getMetadata(), "PDF - 580 kB");
  });
});
