const sideNavigationUrl = 'http://localhost:4600/iframe.html?id=elements-vl-side-navigation--default&viewMode=story';

describe('story vl-side-navigation', () => {
    it('should contain a title', () => {
        cy.visit(`${sideNavigationUrl}`)
        cy.getDataCy('side-navigation')
        .find('.vl-side-navigation__title')
            .contains('Op deze pagina')
    });

});
