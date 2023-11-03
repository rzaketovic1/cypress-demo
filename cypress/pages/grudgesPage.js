class GrudgesPage {

    getGrudgeInput() {
      return cy.getDataTest('grudge-input').find('input');
    }
  
    getAddGrudgeButton() {
      return cy.getDataTest('add-grudge-button');
    }  
  
    getClearButton() {
      return cy.getDataTest('clear-button');
    }
  
    verifyGrudgeListCount(count) {
        cy.getDataTest('grudge-list').within(()=>{
            cy.get('li').should('have.length', count);
        })
    }

    deleteGrudgeItem(listItem) {
        cy.getDataTest('grudge-list').within(()=>{
          cy.get('li').its(listItem).within(()=>{
              cy.get('button').click()
          })
      })
    }

    addGrudge(text) {
      this.getGrudgeInput().type(text);
      this.getAddGrudgeButton().click();
    }
  
    clearGrudges() {
      this.getClearButton().click();
    }
  }
  
  module.exports = GrudgesPage;