import {login} from "../../cypress/support/pom/LoginPage";
import LoginSelectors from "../../cypress/fixtures/loginSelectors.json";

const { username, password } = Cypress.env("userCredentials");

describe('template spec', () => {
  beforeEach("get the login url", () => {
    login.get.endpoint()
    
    cy.url().should("include", "https://staging.chicksgold.com")
  });

  it('full fill login form', () => {
    cy.wait(5000);
    cy.get(LoginSelectors.buttonSingInCG).should("have.text", "Sign In").click();

    login.fullFillLoginForm(username, password)
  });
});
