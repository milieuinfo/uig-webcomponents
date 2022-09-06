const formAnnotationUrl = 'http://localhost:4600/iframe.html?id=elements-vl-form-annotation--default&viewMode=story';
const formAnnotationSpanUrl = 'http://localhost:4600/iframe.html?id=elements-vl-form-annotation--as-span&viewMode=story';

describe('story vl-form-annotation', () => {
    it('should contain a text', () => {
        cy.visit(`${formAnnotationUrl}`)
        cy.getDataCy('form-annotation')
            .should('have.class', 'vl-form__annotation')
            .contains('De naam van het evenement moet minstens 12 karakters tellen.')
    });

    it('should contain a text', () => {
        cy.visit(`${formAnnotationSpanUrl}`)
        cy.getDataCy('form-annotation-span')
            .should('have.class', 'vl-form__annotation')
            .contains('De naam van het evenement moet minstens 12 karakters tellen.')
    });


});
