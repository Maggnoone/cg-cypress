import LoginSelectors from "../../fixtures/loginSelectors.json"

class Login {

    get = {
        endpoint: () => cy.visit('https://staging-user.chicksgroup.com/sign-in'),
        usernameInput: () => 
            cy.get(LoginSelectors.loginContainerFirstShadowEmail)
                .shadow()
                .find(LoginSelectors.loginContainerSecondShadow)
                .shadow()
                .find(LoginSelectors.loginContainerThirdShadow)
                ,
        passwordInput: () => 
            cy.get(LoginSelectors.loginContainerFirstShadowPassword)
                .shadow()
                .find(LoginSelectors.loginContainerSecondShadow)
                .shadow()
                .find(LoginSelectors.loginContainerThirdShadow)
        ,
        submitButton: () => cy.get(LoginSelectors.signInButton),
    }

    enterUsername(username) {
        this.get.usernameInput().type(username)
    }

    enterPassword(password) {
        this.get.passwordInput().type(password)
    }

    submitLoginForm() {
        this.get.submitButton().click()
    }
    
}

export const login = new Login;