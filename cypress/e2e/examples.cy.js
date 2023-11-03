import NavigatePage from "../pages/examplesPage"
import ExamplesPage from "../pages/examplesPage"
import GrudgesPage from "../pages/grudgesPage"

describe('Examples examples',() =>{

    const navigatePage = new NavigatePage()
    const examplesPage = new ExamplesPage()
    const grudgesPage = new GrudgesPage()

    it('Navigates through different pages', () => {
        navigatePage.navigateToWhyCypress();
        navigatePage.verifyCurrentPath('/');
    
        navigatePage.navigateToOverview();
        navigatePage.verifyCurrentPath('/overview');
    
        navigatePage.navigateToFundamentals();
        navigatePage.verifyCurrentPath('/fundamentals');
    });

    beforeEach(()=>{
        cy.visit('/examples')
        examplesPage.verifyCurrentPath('/examples');
    })
    

    it('should add grudges', () => {
        cy.contains(/add some grudges/i)
       grudgesPage.verifyGrudgeListCount(0);
        
        grudgesPage.addGrudge('some grudge');
        grudgesPage.verifyGrudgeListCount(1);
    
        grudgesPage.addGrudge('some grudge number 2');
        grudgesPage.verifyGrudgeListCount(2);
      });
    
    it('should delete a grudge', () => {
        grudgesPage.addGrudge('some grudge');
        grudgesPage.addGrudge('some grudge number 2');
        
        grudgesPage.verifyGrudgeListCount(2);
    
        grudgesPage.deleteGrudgeItem(0)
        grudgesPage.verifyGrudgeListCount(1);
      });
    
      it('should clear all grudges', () => {
        grudgesPage.addGrudge('some grudge');
        grudgesPage.addGrudge('some grudge number 2');
        grudgesPage.verifyGrudgeListCount(2);

        grudgesPage.clearGrudges();
        grudgesPage.verifyGrudgeListCount(0);
    
      });

})