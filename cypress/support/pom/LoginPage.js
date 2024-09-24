import LoginSelectors from "../../fixtures/loginSelectors.json"

class Login {

    get = {
        endpoint: () => cy.visit('https://staging-user.chicksgroup.com/sign-in'),
        usernameInput: () => {
            cy.get(LoginSelectors.loginContainerFirstShadowEmail)
            .getElementByShadow(LoginSelectors.loginContainerSecondShadow)
            .getElementByShadow(LoginSelectors.loginContainerThirdShadow)
            .should('have.text', 'Enter email address');
        },
        passwordInput: () => {
            cy.get(LoginSelectors.loginContainerFirstShadowPassword)
            .getElementByShadow(LoginSelectors.loginContainerSecondShadow)
            .getElementByShadow(LoginSelectors.loginContainerThirdShadow)
            .should('have.text', 'Enter password');
        },
        submitButton: () => cy.get(LoginSelectors.signInButton),
    }

    enterUsername() {
        this.enterUsername().clear().type("Testing")
    }

    enterPassword() {
        this.passwordInput().clear().type("Testing")
    }

    submitLoginForm() {
        this.submitButton().click()
    }
    
}