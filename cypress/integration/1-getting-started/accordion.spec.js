/* eslint-disable no-undef */

describe('Accordion', () => {
  it('should respond to click on button with warning', () => {
    cy.visit('http://localhost:8080/iframe.html?id=custom-elements-vl-accordion--default&args=&viewMode=story');
    cy.get('vl-accordion').shadow().find('.vl-toggle').click();
  });
});
