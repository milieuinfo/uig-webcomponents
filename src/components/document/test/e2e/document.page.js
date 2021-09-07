const VlDocument = require("./document.js");
const { Page, Config } = require("../../../../../test/index.js").Test;

class VlDocumentPage extends Page {
  async getDocument() {
    return new VlDocument(this.driver, "vl-document");
  }

  async load() {
    await super.load(Config.baseUrl + "/document/test/e2e");
  }
}

module.exports = VlDocumentPage;
