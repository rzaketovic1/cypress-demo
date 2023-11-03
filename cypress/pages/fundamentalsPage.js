class FundamentalsPage{

    getHeader() {
        return cy.getDataTest('fundamentals-header');
    }
    
    verifyHeaderText() {
        this.getHeader().should('contain.text', 'Testing Fundamentals');
    }
    
    testAccordion() {
        const accordionItem = '[data-test="accordion-item-1"] div[role="button"]';
    
        cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible');
        cy.get(accordionItem).click();
        cy.contains(/Your tests will exist in a describe block./i).should('be.visible');
        cy.get(accordionItem).click();
        cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible');
      }
    }
    
    
module.exports = FundamentalsPage;