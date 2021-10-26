import { assert, getDriver } from "../../../../utils/test";
import VlInputFieldPage from "./input-field.page";

describe("vl-input-field", async () => {
  let vlInputFieldPage;

  before(async () => {
    vlInputFieldPage = new VlInputFieldPage(getDriver());
    await vlInputFieldPage.load();
  });

  it("Als gebruiker kan ik text inputten in een inputfield", async () => {
    const inputText = "text";
    const inputField = await vlInputFieldPage.getInputField();
    await inputField.setValue(inputText);
    await assert.eventually.equal(inputField.getValue(), inputText);
  });

  it("Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een block inputfield", async () => {
    const inputFieldNotBlock = await vlInputFieldPage.getInputField();
    await assert.eventually.isFalse(inputFieldNotBlock.isBlock());
    const inputFieldBlock = await vlInputFieldPage.getInputFieldBlock();
    await assert.eventually.isTrue(inputFieldBlock.isBlock());
  });

  it("Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een error inputfield", async () => {
    const inputFieldNotError = await vlInputFieldPage.getInputField();
    await assert.eventually.isFalse(inputFieldNotError.isError());
    const inputFieldError = await vlInputFieldPage.getInputFieldError();
    await assert.eventually.isTrue(inputFieldError.isError());
  });

  it("Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een success inputfield", async () => {
    const inputFieldNotSuccess = await vlInputFieldPage.getInputField();
    await assert.eventually.isFalse(inputFieldNotSuccess.isSuccess());
    const inputFieldSuccess = await vlInputFieldPage.getInputFieldSuccess();
    await assert.eventually.isTrue(inputFieldSuccess.isSuccess());
  });

  it("Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een disabled inputfield", async () => {
    const inputFieldEnabled = await vlInputFieldPage.getInputField();
    await assert.eventually.isTrue(inputFieldEnabled.isEnabled());
    const inputFieldNotEnabled = await vlInputFieldPage.getInputFieldDisabled();
    await assert.eventually.isFalse(inputFieldNotEnabled.isEnabled());
  });

  it("Als gebruiker kan ik geen waarde zetten in een disabled input veld", async () => {
    const inputFieldDisabled = await vlInputFieldPage.getInputFieldDisabled();
    await assert.isRejected(inputFieldDisabled.setValue("foobar"));
  });

  it("Als gebruiker zie ik het onderscheid tussen een gewoon inputfield en een small inputfield", async () => {
    const inputFieldNotSmall = await vlInputFieldPage.getInputField();
    await assert.eventually.isFalse(inputFieldNotSmall.isSmall());
    const inputFieldSmall = await vlInputFieldPage.getInputFieldSmall();
    await assert.eventually.isTrue(inputFieldSmall.isSmall());
  });
});
