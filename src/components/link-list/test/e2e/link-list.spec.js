import { assert, getDriver } from "../../../../utils/test";
import VlLinkListPage from "./link-list.page";

describe("vl-link-list", async () => {
  let vlLinkListPage;

  before(() => {
    vlLinkListPage = new VlLinkListPage(getDriver());
    return vlLinkListPage.load();
  });

  it("WCAG", async () => {
    await assert.eventually.isFalse(vlLinkListPage.hasWcagIssues());
  });

  it("ik zie het juiste aantal list items voor een linked list", async () => {
    const linkList = await vlLinkListPage.getLinkList();
    const aantalListItems = await linkList.getListItems();
    assert.equal(aantalListItems.length, 2);
  });
});
