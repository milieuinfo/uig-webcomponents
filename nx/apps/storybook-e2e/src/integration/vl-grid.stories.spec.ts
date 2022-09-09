const url = 'http://localhost:4600/iframe.html?id=elements-vl-grid--default&viewMode=story';

describe('story vl-grid', () => {
    it('should contain a stacked grid', () => {
        cy.visit(`${url}`);
        cy.getDataCy('grid')
            .should('have.class', 'vl-grid')
            .should('have.class', 'vl-grid--is-stacked')
    });

    it('should contain a large stacked grid', () => {
        cy.visit(`${url}&args=stackedLarge:true;stacked:false`);
        cy.getDataCy('grid')
            .should('have.class', 'vl-grid')
            .should('have.class', 'vl-grid--is-stacked-large')
    });

    it('should contain a small stacked grid', () => {
        cy.visit(`${url}&args=stackedSmall:true;stacked:false`);
        cy.getDataCy('grid')
            .should('have.class', 'vl-grid')
            .should('have.class', 'vl-grid--is-stacked-small')
    });

    it('should contain a center aligned grid', () => {
        cy.visit(`${url}&args=alignCenter:true;`);
        cy.getDataCy('grid')
            .should('have.class', 'vl-grid')
            .should('have.class', 'vl-grid--align-center')
    });

    it('should contain a right aligned grid', () => {
        cy.visit(`${url}&args=alignEnd:true;`);
        cy.getDataCy('grid')
            .should('have.class', 'vl-grid')
            .should('have.class', 'vl-grid--align-end')
    });

    it('should contain a spaced around grid', () => {
        cy.visit(`${url}&args=alignSpaceAround:true`);
        cy.getDataCy('grid')
            .should('have.class', 'vl-grid')
            .should('have.class', 'vl-grid--align-space-around')
    });

    it('should contain a spaced between grid', () => {
        cy.visit(`${url}&args=alignSpaceBetween:true`);
        cy.getDataCy('grid')
            .should('have.class', 'vl-grid')
            .should('have.class', 'vl-grid--align-space-between')
    });
});
