const actionGroupUrl = 'http://localhost:4600/iframe.html?id=elements-vl-action-group--default&viewMode=story';

describe('story vl-action-group', () => {
    it('should contain an action group', () => {
        cy.visit(`${actionGroupUrl}`);
        cy.getDataCy('action-group')
            .should('have.class', 'vl-action-group')
    });

    it('should contain a centered action group', () => {
        cy.visit(`${actionGroupUrl}&args=align:center`);
        cy.getDataCy('action-group')
            .should('have.class', 'vl-action-group')
            .should('have.class', 'vl-action-group--align-center')
    });

    it('should contain a right aligned action group', () => {
        cy.visit(`${actionGroupUrl}&args=align:right`);
        cy.getDataCy('action-group')
            .should('have.class', 'vl-action-group')
            .should('have.class', 'vl-action-group--align-right')
    });

    it('should contain an action group with space between', () => {
        cy.visit(`${actionGroupUrl}&args=spaceBetween:true`);
        cy.getDataCy('action-group')
            .should('have.class', 'vl-action-group')
            .should('have.class', 'vl-action-group--space-between')
    });

    it('should contain an action group with space between', () => {
        cy.visit(`${actionGroupUrl}&args=spaceBetween:true`);
        cy.getDataCy('action-group')
            .should('have.class', 'vl-action-group')
            .should('have.class', 'vl-action-group--space-between')
    });


});
