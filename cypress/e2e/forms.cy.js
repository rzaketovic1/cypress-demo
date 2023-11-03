import FormsPage from "../pages/formsPage"

describe('Form tests', () =>{

    const formsPage = new FormsPage();

    beforeEach(()=>{
        cy.visit('/forms')
    })

    it('Subscribing with valid email should succeed', () => {
        const validEmail = 'test@coderam.com';
    
        formsPage.getSubscribeFormInput().type(validEmail);
        formsPage.getSubscribeButton().click();
    
        cy.contains(`Successfully subbed: ${validEmail}!`).should('exist');
        cy.wait(3000);
        cy.contains(`Successfully subbed: ${validEmail}!`).should('not.exist');
      });
    
    it('Subscribing with invalid email should show error', () => {
        const invalidEmail = 'test@coderam.io';
    
        formsPage.getSubscribeFormInput().type(invalidEmail);
        formsPage.getSubscribeButton().click();
    
        cy.contains(`Invalid email: ${invalidEmail}!`).should('exist');
        cy.wait(3000);

        cy.contains(/fail!/i).should('not.exist')
        formsPage.getSubscribeButton().click();
        cy.contains(/fail!/i).should('exist')
      });
})