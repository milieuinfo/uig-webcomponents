const url = 'http://localhost:4600/iframe.html?id=elements-vl-data-table--default&viewMode=story';

describe('story vl-data-table', () => {
    it('should contain a data table', () => {
        cy.visit(`${url}`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
    });

    it('should contain a data table with headers', () => {
        cy.visit(`${url}`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .getDataCy('data-table-header-1')
            .contains('Entry Header 1')
            .getDataCy('data-table-header-2')
            .contains('Entry Header 2')
            .getDataCy('data-table-header-3')
            .contains('Entry Header 3')
            .getDataCy('data-table-header-4')
            .contains('Entry Header 4')
    });

    it('should contain a data table with columns', () => {
        cy.visit(`${url}`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .getDataCy('data-table-body-row-1')
            .children()
            .each(($el, index) => {
                cy.wrap($el)
               .invoke("text").then((el) => { expect(el).contains('Entry line ' + (index+1)); });
             })
            .getDataCy('data-table-body-row-2')
            .children()
            .each(($el, index) => {
                cy.wrap($el)
               .invoke("text").then((el) => { expect(el).contains('Entry line ' + (index+1)); });
             })
            .getDataCy('data-table-body-row-3')
            .children()
            .each(($el, index) => {
                cy.wrap($el)
               .invoke("text").then((el) => { expect(el).contains('Entry line ' + (index+1)); });
             })
    });

    it('should contain a data table with hover styling', () => {
        cy.visit(`${url}&args=hover:true`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--hover')
    });

    it('should contain a data table with a matrix', () => {
        cy.visit(`${url}&args=matrix:true`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--matrix')
    });

    it('should contain a data table with a grid', () => {
        cy.visit(`${url}&args=grid:true`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--grid')
    });

    it('should contain a data table with a zebra grid', () => {
        cy.visit(`${url}&args=zebra:true`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--zebra')
    });

    it('should contain a data table that collapsed on the medium breakpoint', () => {
        cy.visit(`${url}&args=collapsedM:true`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-m')
    });

    it('should contain a data table that collapsed on the small breakpoint', () => {
        cy.visit(`${url}&args=collapsedS:true`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-s')
    });

    it('should contain a data table that collapsed on the extra small breakpoint', () => {
        cy.visit(`${url}&args=collapsedXS:true`);
        cy.getDataCy('data-table')
            .should('have.class', 'vl-data-table')
            .should('have.class', 'vl-data-table--collapsed-xs')
    });

});
