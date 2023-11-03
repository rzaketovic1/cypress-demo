class FormsPage{

    getSubscribeFormInput() {
        return cy.getDataTest('subscribe-form').find('input');
      }
    
      getSubscribeButton() {
        return cy.getDataTest('subscribe-button');
      }

}

module.exports = FormsPage;