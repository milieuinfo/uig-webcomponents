const shareButtonsUrl = 'http://localhost:4600/iframe.html?id=components-vl-share-buttons--default&viewMode=story';

describe('story vl-share-buttons', () => {
    it('should contain share buttons', () => {
        cy.visit(`${shareButtonsUrl}`);
        cy.getDataCy('share-buttons')
            .shadow()
            .find('.vl-share-buttons')
            .should('not.have.class', 'vl-share-buttons--alt');
    });

    it('should contain share buttons with an alternative styling', () => {
        cy.visit(`${shareButtonsUrl}&args=alt:true`);
        cy.getDataCy('share-buttons').shadow().find('.vl-share-buttons').should('have.class', 'vl-share-buttons--alt');
    });

    it('should contain a facebook share button', () => {
        cy.visit(`${shareButtonsUrl}`);
        cy.getDataCy('share-button-1')
            .shadow()
            .find('.vl-share-button')
            .should('have.class', 'vl-share-button--facebook');
    });

    it('should contain a twitter share button', () => {
        cy.visit(`${shareButtonsUrl}`);
        cy.getDataCy('share-button-2')
            .shadow()
            .find('.vl-share-button')
            .should('have.class', 'vl-share-button--twitter');
    });

    it('should contain a linkedin share button', () => {
        cy.visit(`${shareButtonsUrl}`);
        cy.getDataCy('share-button-3')
            .shadow()
            .find('.vl-share-button')
            .should('have.class', 'vl-share-button--linkedin');
    });

    it('should contain a googleplus share button', () => {
        cy.visit(`${shareButtonsUrl}`);
        cy.getDataCy('share-button-4')
            .shadow()
            .find('.vl-share-button')
            .should('have.class', 'vl-share-button--googleplus');
    });

    it('should contain a mail share button', () => {
        cy.visit(`${shareButtonsUrl}`);
        cy.getDataCy('share-button-5').shadow().find('.vl-share-button').should('have.class', 'vl-share-button--mail');
    });
});
