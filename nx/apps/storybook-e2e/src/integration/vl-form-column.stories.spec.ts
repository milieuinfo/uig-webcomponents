const url = 'http://localhost:4600/iframe.html?id=elements-vl-form-grid-vl-form-column--default&viewMode=story';

describe('story vl-form-column', () => {
    it('should contain form with a 8/12 form column in it', () => {
        cy.visit(`${url}`);
        cy.getDataCy('form')
            .getDataCy('form-column')
            .should('have.class', 'vl-form-col--8-12')
    });

    it('should contain form with a 8/12 form column in it that\'s pushed 2/12 columns', () => {
        cy.visit(`${url}&args=push:2`);
        cy.getDataCy('form')
            .getDataCy('form-column')
            .should('have.class', 'vl-form-col--8-12')
            .should('have.class', 'vl-form-push--2-12')
    });
});
