import {login} from "../../cypress/support/pom/LoginPage";
import {homePage} from "../../cypress/support/pom/HomePage";

describe('template spec', () => {
    beforeEach("get the login url", () => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1920, 1080)
        login.visitCG()
      
        cy.url().should("include", "https://staging.chicksgold.com")
    });
    
  
    it('Home Page Main Content', () => homePage.clickMainContentElements());
  
    it('Home Page Game Cards Content', () => homePage.clickGameCardContentElements());
  
    it('Home Page Game Cards', () => homePage.clickGameCardsElements());

  });
  