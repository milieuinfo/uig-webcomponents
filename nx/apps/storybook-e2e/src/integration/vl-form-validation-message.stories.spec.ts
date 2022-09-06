const formValidationUrl = 'http://localhost:4600/iframe.html?id=elements-vl-form-validation-message--default&viewMode=story';

describe('story vl-form-validation-message', () => {
    it('should contain a message', () => {
        cy.visit(`${formValidationUrl}`)
        cy.getDataCy('form-validation-message')
            .contains("Het veld 'Naam evenement' is een verplicht veld")
    });

    it('should contain a error styling', () => {
        cy.visit(`${formValidationUrl}`)
        cy.getDataCy('form-validation-message')
            .should('have.class', 'vl-form__error')
    });

    it('should contain a success styling', () => {
        cy.visit(`${formValidationUrl}&args=success:true`)
        cy.getDataCy('form-validation-message')
            .should('have.class', 'vl-form__success')
    });


});
