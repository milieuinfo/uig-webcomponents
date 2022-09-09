const url = 'http://localhost:4600/iframe.html?id=elements-vl-button--default&viewMode=story'

describe('story vl-button', () => {
    it('should contain a wide error button', () => {
        cy.visit(`${url}&args=error:true;wide:true`);
        cy.getDataCy('button-default')
            .should('have.class', 'vl-button')
            .should('have.class', 'vl-button--wide')
            .should('have.class', 'vl-button--error');
    });
});
