describe('story vl-button', () => {
    beforeEach(() =>
        cy.visit('http://localhost:4600/iframe.html?args=&id=elements-vl-button--vl-button&viewMode=story')
    );

    it('should contain a wide error button', () => {
        cy.getDataCy('button-wide-error')
            .should('have.class', 'vl-button')
            .should('have.class', 'vl-button--wide')
            .should('have.class', 'vl-button--error');
    });
});
