describe('story vl-form-group', () => {
    beforeEach(() =>
        cy.visit('http://localhost:4600/iframe.html?args=&id=elements-vl-form-vl-form-group--default&viewMode=story')
    );

    it('should contain form with a form group in it', () => {
        cy.getDataCy('form-group')
            .should('have.class', 'vl-form__group')
    });
});
