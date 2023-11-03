
import FundamentalsPage from "../pages/fundamentalsPage"

describe('Fundamentals test', () => {

  const fundamentalsPage = new FundamentalsPage();

  beforeEach(()=> {
    cy.visit('/fundamentals')
  })

  it('Contains correct header text', () => {
    fundamentalsPage.verifyHeaderText();
  })

  it('Accordion works correctly', () => {
    fundamentalsPage.testAccordion();
  })
})