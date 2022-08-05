const url = 'http://localhost:4600/iframe.html?id=elements-vl-doormat--default&viewMode=story';

describe('story vl-doormat', () => {
    it('should contain a doormat', () => {
        cy.visit(`${url}`);
        cy.getDataCy('doormat')
            .should('have.class', 'vl-doormat')
    });

    it('should contain a doormat with alt styling', () => {
        cy.visit(`${url}&args=alt:true`);
        cy.getDataCy('doormat')
            .should('have.class', 'vl-doormat--alt')
    });

    it('should contain a doormat with an image', () => {
        cy.visit('http://localhost:4600/iframe.html?args=&id=elements-vl-doormat-vl-doormat-image--default&viewMode=story');
        cy.getDataCy('doormat')
            .should('have.class', 'vl-doormat')
            .getDataCy('doormat-image')
            .should('have.class', 'vl-doormat__image')
    });

    it('should contain a doormat with an image with graphic styling', () => {
        cy.visit('http://localhost:4600/iframe.html?args=graphic:true&id=elements-vl-doormat-vl-doormat-image--default&viewMode=story');
        cy.getDataCy('doormat')
            .should('have.class', 'vl-doormat')
            .getDataCy('doormat-image')
            .should('have.class', 'vl-doormat__graphic')
    });

});
