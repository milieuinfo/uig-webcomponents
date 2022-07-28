describe('storybook', () => {
    beforeEach(() => cy.visit('http://localhost:4600/iframe.html?args=&id=example-button--primary&viewMode=story'));

    it('should contain a button', () => {
        cy.get('.storybook-button').contains('Button');
    });
});
