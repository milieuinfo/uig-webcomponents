const url = 'http://localhost:4600/iframe.html?id=elements-vl-titles-vl-h2--default&viewMode=story'

describe('story vl-titles', () => {
    it('should contain a h2', () => {
        cy.visit(`${url}`);
        cy.getDataCy('h2')
            .should('have.class', 'vl-title')
            .should('have.class', 'vl-title--h2')
    });

    it('should contain a h2 with a border', () => {
        cy.visit(`${url}&args=border:true;sans:true`);
        cy.getDataCy('h2')
            .should('have.class', 'vl-title')
            .should('have.class', 'vl-title--has-border')
            .should('have.class', 'vl-title--sans')
    });

    it('should contain a h2 with a sans style', () => {
        cy.visit(`${url}&args=sans:true`);
        cy.getDataCy('h2')
            .should('have.class', 'vl-title')
            .should('have.class', 'vl-title--sans')
    });

    it('should contain a h2 with an alternative border style ', () => {
        cy.visit(`${url}&args=alt:true`);
        cy.getDataCy('h2')
            .should('have.class', 'vl-title')
            .should('have.class', 'vl-title--alt')
    });

    it('should contain a h2 without whitespace at the bottom', () => {
        cy.visit(`${url}&args=noSpaceBottom:true`);
        cy.getDataCy('h2')
            .should('have.class', 'vl-title')
            .should('have.class', 'vl-title--no-space-bottom')
    });
});
