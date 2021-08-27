
const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlInfoblockPage = require('./pages/vl-infoblock.page');

describe('vl-infoblock', async () => {
  let vlInfoblockPage;

  before(() => {
    vlInfoblockPage = new VlInfoblockPage(getDriver());
    return vlInfoblockPage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlInfoblockPage.hasWcagIssues());
  });

  it('als gebruiker kan ik de titel van een infoblock zien', async () => {
    const iconblock = await vlInfoblockPage.getContactBlock();
    const title = await iconblock.getTitleSlotElements();
    await assert.eventually.equal(title[0].getText(), 'Contactenlijst');
  });

  it('als gebruiker kan ik de content van een infoblock zien', async () => {
    const iconblock = await vlInfoblockPage.getContactBlock();
    const content = await iconblock.getContentSlotNodes();
    assert.equal(content[0].textContent.trim(), 'Hieronder bevindt zich een overzicht van al uw contacten binnen de Vlaamse Overheid.');
  });

  it('als gebruiker kan ik een infoblock van type contacten herkennen', async () => {
    const iconblock = await vlInfoblockPage.getContactBlock();
    await assert.eventually.isTrue(iconblock.isContact());
  });

  it('als gebruiker kan ik een infoblock van type publicaties herkennen', async () => {
    const iconblock = await vlInfoblockPage.getPublicationsBlock();
    await assert.eventually.isTrue(iconblock.isPublication());
  });

  it('als gebruiker kan ik een infoblock van type faq herkennen', async () => {
    const iconblock = await vlInfoblockPage.getFaqBlock();
    await assert.eventually.isTrue(iconblock.isFaq());
  });

  it('als gebruiker kan ik een infoblock van type nieuws herkennen', async () => {
    const iconblock = await vlInfoblockPage.getNewsBlock();
    await assert.eventually.isTrue(iconblock.isNews());
  });

  it('als gebruiker kan ik een infoblock van type tijdlijn herkennen', async () => {
    const iconblock = await vlInfoblockPage.getTimelineBlock();
    await assert.eventually.isTrue(iconblock.isTimeline());
  });

  it('als gebruiker kan ik een infoblock van type vraag herkennen', async () => {
    const iconblock = await vlInfoblockPage.getQuestionBlock();
    await assert.eventually.isTrue(iconblock.isQuestion());
  });

  it('als gebruiker kan ik een custom icon kiezen', async () => {
    const iconblock = await vlInfoblockPage.getCustomIconBlock();
    const icon = await iconblock.getIcon();
    await assert.eventually.equal(icon.getType(), 'calendar');
    await assert.eventually.isNull(iconblock.getType());
  });

  it('als gebruiker kan ik een de titel van een info-block ook in een slot meegeven', async () => {
    const iconblock = await vlInfoblockPage.getContactSlotBlock();
    const title = await iconblock.getTitleSlotElements();
    await assert.eventually.equal(title[0].getText(), 'Titel via slot');
  });
});
