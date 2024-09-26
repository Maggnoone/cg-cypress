import LoginSelectors from "../../fixtures/loginSelectors.json"


class Login {
    
    visitCG() {
        cy.visit('https://staging.chicksgold.com')
    }

    enterUsername(username) {
        cy.origin(
            "https://staging-user.chicksgroup.com/sign-in",
            { args: { username, LoginSelectors } },
            ({ username, LoginSelectors }) => {
                cy.get(LoginSelectors.loginContainerFirstShadowEmail)
                    .shadow()
                    .find(LoginSelectors.loginContainerSecondShadow)
                    .shadow()
                    .find(LoginSelectors.loginEmailContainerThirdShadow)
                    .clear().type(username);
            }
        );
    }
    
    enterPassword(password) {
        cy.origin(
            "https://staging-user.chicksgroup.com/sign-in",
            { args: { password, LoginSelectors } },
            ({ password, LoginSelectors }) => {
                cy.get(LoginSelectors.loginContainerFirstShadowPassword)
                    .shadow()
                    .find(LoginSelectors.loginContainerSecondShadow)
                    .shadow()
                    .find(LoginSelectors.loginPasswordContainerThirdShadow)
                    .clear().type(password);
            }
        );
    }

    submitLoginForm() {
        cy.origin(
            "https://staging-user.chicksgroup.com/sign-in",
            { args: { LoginSelectors } },
            ({ LoginSelectors }) => {
                cy.get(LoginSelectors.signInButton).click();
            }
        );
    }

    fullFillLoginForm(username, password) {
        
        this.visitCG()
        this.enterUsername(username);
        this.enterPassword(password);
        this.submitLoginForm();
            
    }
    
}

export const login = new Login;
