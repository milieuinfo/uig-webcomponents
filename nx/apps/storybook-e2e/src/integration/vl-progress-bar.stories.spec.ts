const progressBarUrl = 'http://localhost:4600/iframe.html?id=components-vl-progress-bar--default&viewMode=story';

describe('story vl-progress-bar', () => {
    it('should contain 3 steps', () => {
        cy.visit(`${progressBarUrl}`)
        cy.getDataCy('progress-bar')
        .shadow()
        .find('.vl-progress-bar__step')
            .should('have.length', 3)
    });

    it('should contain a numeric progress bar', () => {
        cy.visit(`${progressBarUrl}&args=numeric:true`)
        cy.getDataCy('progress-bar')
        .shadow()
        .find('.vl-progress-bar')
            .should('have.class', 'vl-progress-bar--numeric')
    });

    it('should contain a visible tooltip on focus', () => {
        cy.visit(`${progressBarUrl}&args=numeric:true;focusOnChange:true;`)
        cy.getDataCy('progress-bar')
        .shadow()
        .find('.vl-progress-bar')
        .find('button.vl-progress-bar__bullet')
        .next()
            .should('have.attr', 'aria-hidden', 'false')
    });

});
