import {login} from "../../cypress/support/pom/LoginPage";
import {homePage} from "../../cypress/support/pom/HomePage";
import LoginSelectors from "../../cypress/fixtures/loginSelectors.json";
import HomePage from "../../cypress/fixtures/homePage.json";

const { username, password } = Cypress.env("userCredentials");

describe('template spec', () => {
  beforeEach("get the login url", () => {
    cy.viewport(1920, 1080)
    login.visitCG()
    
    cy.url().should("include", "https://staging.chicksgold.com")
  });

  it('full fill login form', () => {

    cy.wait(5000);
    cy.get(LoginSelectors.buttonSingInCG).should("have.text", "Sign In").click();
    
    login.fullFillLoginForm(username, password)

  });
});
