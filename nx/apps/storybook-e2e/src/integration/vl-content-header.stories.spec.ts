const contentHeaderUrl = 'http://localhost:4600/iframe.html?id=components-vl-content-header--default&viewMode=story';

describe('story vl-content-header', () => {
    it('should contain a context link and title link', () => {
        cy.visit(`${contentHeaderUrl}`)
        cy.getDataCy('content-header')
        .get('a')
        .eq(0)
            .contains('Context')
        .next()
            .contains('Vlaanderen')
    });

    it('should contain an image', () => {
        cy.visit(`${contentHeaderUrl}`)
        cy.getDataCy('content-header')
        .get('img')
            .should('have.class', 'vl-image')
    });

});
