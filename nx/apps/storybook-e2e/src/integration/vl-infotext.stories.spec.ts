const url = 'http://localhost:4600/iframe.html?id=elements-vl-infotext--default&viewMode=story';

describe('story vl-infotext', () => {
    it('should contain an infotext', () => {
        cy.visit(`${url}`);
        cy.getDataCy('infotext')
        .find('>div')
            // .should('have.class', 'vl-infotext')
    });

    it('should contain an infotext with badge styling', () => {
        cy.visit(`${url}&args=badge:true`);
        cy.getDataCy('infotext')
        .find('>div')
            .should('have.class', 'vl-infotext')
            .should('have.class', 'vl-infotext--badge')
    });

    it('should contain an infotext with link', () => {
        cy.visit('http://localhost:4600/iframe.html?args=&id=elements-vl-infotext--with-link');
        cy.getDataCy('infotext-link')
        .find('>a')
            // .should('have.class', 'vl-infotext')
    });

    it('should contain an infotext with link with badge styling', () => {
        cy.visit(`http://localhost:4600/iframe.html?&id=elements-vl-infotext--with-link&args=badge:true`);
        cy.getDataCy('infotext-link')
        .find('>a')
            .should('have.class', 'vl-infotext')
            .should('have.class', 'vl-infotext--badge')
    });

});
