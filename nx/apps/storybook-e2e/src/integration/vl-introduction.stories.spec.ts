describe('story vl-introduction', () => {
    beforeEach(() =>
        cy.visit('http://localhost:4600/iframe.html?args=&id=elements-vl-introduction--default&viewMode=story')
    );

    it('should contain an introduction', () => {
        cy.getDataCy('introduction')
            .should('have.class', 'vl-introduction')
            .contains(' Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. ')
    });
});
