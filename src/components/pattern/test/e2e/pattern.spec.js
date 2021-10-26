import { assert, getDriver } from "../../../../utils/test";
import VlPatternPage from "./pattern.page";

describe("vl-pattern", async () => {
  let vlPatternPage;

  before(() => {
    vlPatternPage = new VlPatternPage(getDriver());
    return vlPatternPage.load();
  });

  it("als gebruiker kan ik alleen een toegelaten IBAN patroon invullen", async () => {
    const input = await vlPatternPage.getIBANInput();
    await input.setValue("dit is geen IBAN nummer");
    await assert.eventually.equal(input.getValue(), "BE");
    await input.setValue("BE46 4566 1131 4336");
    await assert.eventually.equal(input.getValue(), "BE46 4566 1131 4336");
    await input.setValue("BE46456611314336");
    await assert.eventually.equal(input.getValue(), "BE46 4566 1131 4336");
    await assert.eventually.isTrue(input.hasIBANPattern());
    await assert.eventually.isFalse(input.hasPhonePattern());
    await assert.eventually.isFalse(input.hasDatePattern());
    await assert.eventually.isFalse(input.hasPricePattern());
    await assert.eventually.isFalse(input.hasRRNPattern());
    await assert.eventually.isTrue(input.hasPatternPrefix());
    await assert.eventually.equal(input.getPatternPrefix(), "BE");
    await assert.eventually.isFalse(input.hasUuidPattern());
  });

  it("als gebruiker kan ik alleen een toegelaten telefoonnummer patroon invullen", async () => {
    const input = await vlPatternPage.getPhoneInput();
    await input.setValue("dit is geen telefoonnummer");
    await assert.eventually.equal(input.getValue(), "+32 ");
    await input.setValue("02 553 80 11");
    await assert.eventually.equal(input.getValue(), "+32 2 553 80 11");
    await input.setValue("025538011");
    await assert.eventually.equal(input.getValue(), "+32 2 553 80 11");
    await assert.eventually.isFalse(input.hasIBANPattern());
    await assert.eventually.isTrue(input.hasPhonePattern());
    await assert.eventually.isFalse(input.hasDatePattern());
    await assert.eventually.isFalse(input.hasPricePattern());
    await assert.eventually.isFalse(input.hasRRNPattern());
    await assert.eventually.isTrue(input.hasPatternPrefix());
    await assert.eventually.equal(input.getPatternPrefix(), "+32");
    await assert.eventually.isFalse(input.hasUuidPattern());
  });

  it("als gebruiker kan ik alleen een toegelaten datum patroon invullen", async () => {
    const input = await vlPatternPage.getDateInput();
    await input.setValue("dit is geen datum");
    await assert.eventually.equal(input.getValue(), "");
    await input.setValue("03.12.1988");
    await assert.eventually.equal(input.getValue(), "03.12.1988");
    await input.setValue("03121988");
    await assert.eventually.equal(input.getValue(), "03.12.1988");
    await assert.eventually.isFalse(input.hasIBANPattern());
    await assert.eventually.isFalse(input.hasPhonePattern());
    await assert.eventually.isTrue(input.hasDatePattern());
    await assert.eventually.isFalse(input.hasPricePattern());
    await assert.eventually.isFalse(input.hasRRNPattern());
    await assert.eventually.isFalse(input.hasPatternPrefix());
    await assert.eventually.isFalse(input.hasUuidPattern());
  });

  it("als gebruiker kan ik alleen een toegelaten prijs patroon invullen", async () => {
    const input = await vlPatternPage.getPriceInput();
    await input.setValue("dit is geen prijs");
    await assert.eventually.equal(input.getValue(), "€");
    await input.setValue("1 000");
    await assert.eventually.equal(input.getValue(), "€1 000");
    await input.setValue("1000");
    await assert.eventually.equal(input.getValue(), "€1 000");
    await input.setValue("1,49");
    await assert.eventually.equal(input.getValue(), "€1,49");
    await assert.eventually.isFalse(input.hasIBANPattern());
    await assert.eventually.isFalse(input.hasPhonePattern());
    await assert.eventually.isFalse(input.hasDatePattern());
    await assert.eventually.isTrue(input.hasPricePattern());
    await assert.eventually.isFalse(input.hasRRNPattern());
    await assert.eventually.isTrue(input.hasPatternPrefix());
    await assert.eventually.equal(input.getPatternPrefix(), "€");
    await assert.eventually.isFalse(input.hasUuidPattern());
  });

  it("als gebruiker kan ik alleen een toegelaten rijksregisternummer patroon invullen", async () => {
    const input = await vlPatternPage.getRRNInput();
    await input.setValue("dit is geen rrn");
    await assert.eventually.equal(input.getValue(), "");
    await input.setValue("88.12.01-003.56");
    await assert.eventually.equal(input.getValue(), "88.12.01-003.56");
    await input.setValue("88120100356");
    await assert.eventually.equal(input.getValue(), "88.12.01-003.56");
    await assert.eventually.isFalse(input.hasIBANPattern());
    await assert.eventually.isFalse(input.hasPhonePattern());
    await assert.eventually.isFalse(input.hasDatePattern());
    await assert.eventually.isFalse(input.hasPricePattern());
    await assert.eventually.isTrue(input.hasRRNPattern());
    await assert.eventually.isFalse(input.hasPatternPrefix());
    await assert.eventually.isFalse(input.hasUuidPattern());
  });

  it("als gebruiker kan ik alleen een toegelaten uuid patroon invullen", async () => {
    const input = await vlPatternPage.getUuidInput();
    await input.setValue("---XYZ___");
    await assert.eventually.equal(input.getValue(), "");
    await input.setValue("ZZZZZZZZ-ZZZZ-ZZZZ-ZZZZ-ZZZZZZZZZZZZ");
    await assert.eventually.equal(input.getValue(), "");
    await input.setValue("1c6fa548-5eef-11eb-ae93-0242ac130002");
    await assert.eventually.equal(
      input.getValue(),
      "1c6fa548-5eef-11eb-ae93-0242ac130002"
    );
    await input.setValue("1c6fa5485eef11ebae930242ac130002");
    await assert.eventually.equal(
      input.getValue(),
      "1c6fa548-5eef-11eb-ae93-0242ac130002"
    );
    await assert.eventually.isTrue(input.hasUuidPattern());
  });

  it("als gebruiker kan ik alleen een numeriek patroon invullen", async () => {
    const input = await vlPatternPage.getNumericalInput();
    await assert.eventually.isTrue(input.hasNumericalPattern());
    await assert.eventually.equal(input.getNumericalDecimalScale(), "4");

    await input.setValue("foobar");
    await assert.eventually.equal(input.getValue(), "");
    await input.setValue("123foobar");
    await assert.eventually.equal(input.getValue(), "123");
    await input.setValue("1234567,8901");
    await assert.eventually.equal(input.getValue(), "1 234 567,8901");
    await input.setValue("-1234567,8901");
    await assert.eventually.equal(input.getValue(), "-1 234 567,8901");
    await input.setValue("1234567,89012");
    await assert.eventually.equal(input.getValue(), "1 234 567,8901");
  });
});
