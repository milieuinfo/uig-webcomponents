const buttonDefaultUrl = 'http://localhost:4600/iframe.html?id=elements-button--button-default&viewMode=story';

describe('story elements / button / vl-button - default', () => {
    it('should have secondary styling', () => {
        cy.visit(`${buttonDefaultUrl}&args=secondary:true`);
        cy.getDataCy('button-default').should('have.class', 'vl-button').should('have.class', 'vl-button--secondary');
    });
    it('should have secondary styling', () => {
        cy.visit(`${buttonDefaultUrl}&args=secondary:true`);
        cy.getDataCy('button-default').should('have.class', 'vl-button').should('have.class', 'vl-button--secondary');
    });
    it('should contain a wide error button', () => {
        cy.visit(`${buttonDefaultUrl}&args=error:true;wide:true`);
        cy.getDataCy('button-default')
            .should('have.class', 'vl-button')
            .should('have.class', 'vl-button--wide')
            .should('have.class', 'vl-button--error');
    });
});
