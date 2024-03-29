describe('story vl-button-input-addon', () => {
    beforeEach(() =>
        cy.visit('http://localhost:4600/iframe.html?args=&id=elements-vl-input-addon-vl-button-input-addon--default&viewMode=story')
    );

    it('should contain a button input addon element', () => {
        cy.getDataCy('button-input-addon')
            .should('have.class', 'vl-input-addon')
    });
});
