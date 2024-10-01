import {login} from "../../cypress/support/pom/LoginPage";
import {homePage} from "../../cypress/support/pom/HomePage";

describe('template spec', () => {
    beforeEach("get the login url", () => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.viewport(1920, 1080)
        login.visitCG()
      
        cy.url().should("include", "https://staging.chicksgold.com/")
    });
    
    // it('Home Page NavBar Hover', () => homePage.hoverNavBarElements());
    
    // it('Home Page NavBar Links', () => homePage.clickNavBarElements());
  
    it('Home Page Footer', () => homePage.clickCGFooterElements());
  
    it('Home Page Footer Legal Links', () => homePage.clickLegalFooterElements());
  
    it('Home Page Footer Support Links', () => homePage.clickSupportFooterElements());
    
  });
  