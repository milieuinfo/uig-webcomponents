const formLabelUrl = 'http://localhost:4600/iframe.html?id=elements-vl-form-label--default&viewMode=story';

describe('story vl-form-label', () => {
    it('should contain a title', () => {
        cy.visit(`${formLabelUrl}`)
        cy.getDataCy('form-label')
            .should('have.class', 'vl-form__label')
            .contains('foobar')
    });

    it('should contain a light label', () => {
        cy.visit(`${formLabelUrl}&args=light:true`)
        cy.getDataCy('form-label')
            .should('have.class', 'vl-form__label--light')
    });

    it('should contain a block level label', () => {
        cy.visit(`${formLabelUrl}&args=block:true`)
        cy.getDataCy('form-label')
            .should('have.class', 'vl-form__label--block')
    });

});
