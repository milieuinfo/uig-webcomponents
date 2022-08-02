describe('story vl-typography', () => {
    it('should contain typography div', () => {
        cy.visit('http://localhost:4600/iframe.html?args=&id=elements-vl-typography--default&viewMode=story')
        cy.getDataCy('typography-default')
            .should('have.class', 'vl-typography')
            .contains('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod')
    });

    it('should contain typography div', () => {
        cy.visit('http://localhost:4600/iframe.html?args=&id=elements-vl-typography--titles&viewMode=story')
        cy.getDataCy('typography-headings')
            .should('have.class', 'vl-typography')
            .get('h1')
            .contains('Heading 1')
    });
});
