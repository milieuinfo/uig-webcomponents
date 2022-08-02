describe('story vl-image', () => {
    beforeEach(() =>
        cy.visit('http://localhost:4600/iframe.html?args=&id=elements-vl-image--default')
    );

    it('should contain an image', () => {
        cy.getDataCy('image')
            .should('have.class', 'vl-image')
    });
});
