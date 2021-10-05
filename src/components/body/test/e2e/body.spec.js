import { assert, getDriver, By } from "../../../../utils/test";
import { VlBodyPage } from "./body.page.js";

describe("vl-body", async () => {
  let vlBodyPage;

  before(() => {
    vlBodyPage = new VlBodyPage(getDriver());
    return vlBodyPage.load();
  });

  it("als gebruiker kan ik de inhoud van een body element zien", async () => {
    const body = await vlBodyPage.getBody();
    const p = await body.findElement(By.css("p"));
    await assert.eventually.equal(
      p.getText(),
      "By using the native vl-body element incl. styling, a minimum of corporate identity will be loaded."
    );
  });
});
