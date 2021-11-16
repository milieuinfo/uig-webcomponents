import { assert, getDriver } from "../../../../utils/test";
import VlInputGroupPage from "./input-group.page";

describe("vl-input-group", async () => {
  let vlInputGroup;

  before(async () => {
    vlInputGroup = new VlInputGroupPage(getDriver());
    return vlInputGroup.load();
  });

  // it("WCAG", async () => {
  //   await assert.eventually.isFalse(vlInputGroup.hasWcagIssues());
  // });

  it("een gebruiker kan een input-group zien", async () => {
    await assert.eventually.exists(vlInputGroup.getInputGroup());
  });
});
