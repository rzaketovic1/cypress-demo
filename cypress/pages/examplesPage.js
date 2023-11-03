class NavigatePage{

    getSubscribeFormInput() {
        return cy.getDataTest('subscribe-form').find('input');
    }
    
    getSubscribeButton() {
        return cy.getDataTest('subscribe-button');
    }

    navigateToWhyCypress() {
        cy.getDataTest('nav-why-cypress').click();
    }
    
    navigateToOverview() {
        cy.getDataTest('nav-overview').click();
    }
    
    navigateToFundamentals() {
        cy.getDataTest('nav-fundamentals').click();
    }
    
    navigateToExamples() {
        cy.getDataTest('nav-examples').click();
    }
    
      verifyCurrentPath(path) {
        cy.location('pathname').should('equal', path);
      }
}

module.exports = NavigatePage;