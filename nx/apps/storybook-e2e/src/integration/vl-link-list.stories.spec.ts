const url = 'http://localhost:4600/iframe.html?id=elements-vl-link-list--default&viewMode=story';

describe('story vl-link-list', () => {
    it('should contain a link list', () => {
        cy.visit(`${url}`);
        cy.getDataCy('link-list')
            .should('have.class', 'vl-link-list')
    });

    it('should contain a small link list', () => {
        cy.visit(`${url}&args=small:true`);
        cy.getDataCy('link-list')
            .should('have.class', 'vl-link-list')
            .should('have.class', 'vl-link-list--small')
    });

    it('should contain an inline link list', () => {
        cy.visit(`${url}&args=inline:true`);
        cy.getDataCy('link-list')
            .should('have.class', 'vl-link-list')
            .should('have.class', 'vl-link-list--inline')
    });

    it('should contain a bordered link list', () => {
        cy.visit(`${url}&args=bordered:true`);
        cy.getDataCy('link-list')
            .should('have.class', 'vl-link-list')
            .should('have.class', 'vl-link-list--bordered')
    });
});
