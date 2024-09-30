import HomePageSelectors from "../../fixtures/homePage.json"


class HomePage {

    returnHome() {
        cy.url().then((currentUrl) => {
            if (currentUrl !== 'https://staging.chicksgold.com/') {
                cy.wait(2000)
                cy.go('back');
                cy.wait(2000)
            }
        });
    }
    

    hoverNavBarElements() {
        cy.wait(3000)
        cy.get(HomePageSelectors.navBar.currencyDropdown).contains(/USD/i).click();
        cy.wait(1000)
        cy.get(HomePageSelectors.navBar.currencyDropdown).contains(/USD/i).click();
        cy.wait(1000)
        cy.get(HomePageSelectors.navBar.currency).contains(/Currency/i).trigger('mouseover');
        cy.wait(1000)
        cy.get(HomePageSelectors.navBar.items).contains(/Items/i).trigger('mouseover');
        cy.wait(1000)
        cy.get(HomePageSelectors.navBar.accounts).contains(/Accounts/i).trigger('mouseover');
        cy.wait(1000)
        cy.get(HomePageSelectors.navBar.services).contains(/Services/i).trigger('mouseover');
        cy.wait(1000)
        cy.get(HomePageSelectors.navBar.more).contains(/More/i).trigger('mouseover');
        cy.wait(1000)
        cy.get(HomePageSelectors.navBar.sell).contains(/Sell/i).trigger('mouseover');
    }

    clickNavBarElements() {
        cy.wait(3000)

        cy.get(HomePageSelectors.navBar.currency).contains(/Currency/i).click()
        cy.wait(3000)
        cy.url().should("include", "https://staging.chicksgold.com/currency");

        cy.get(HomePageSelectors.navBar.items).contains(/Items/i).click()
        cy.wait(3000)
        cy.url().should("include", 'https://staging.chicksgold.com/items');

        cy.get(HomePageSelectors.navBar.accounts).contains(/Accounts/i).click()
        cy.wait(3000)
        cy.url().should("include", 'https://staging.chicksgold.com/accounts');
        
        cy.get(HomePageSelectors.navBar.services).contains(/Services/i).click()
        cy.wait(3000)
        cy.url().should("include", 'https://staging.chicksgold.com/services');
        
        cy.get(HomePageSelectors.navBar.sell).contains(/Sell/i).click()
        cy.wait(3000)
        cy.url().should("include", 'https://staging.chicksgold.com/sell/currency');
    }

    clickMainContentElements() {
        cy.wait(3000)
        cy.get(HomePageSelectors.mainContent.currency).contains(/Currency/i).click({force: true});
        cy.wait(3000)
        cy.url().should("include", "https://staging.chicksgold.com/currency");
        this.returnHome();
        cy.url().should("include", "https://staging.chicksgold.com/");
        
        cy.get(HomePageSelectors.mainContent.items).contains(/Items/i).click({force: true});
        cy.wait(3000)
        cy.url().should("include", 'https://staging.chicksgold.com/items');
        cy.visit('https://staging.chicksgold.com/');
        cy.url().should("include", "https://staging.chicksgold.com/");
        
        cy.get(HomePageSelectors.mainContent.accounts).contains(/Accounts/i).click({force: true});
        cy.wait(5000)
        cy.url().should("include", 'https://staging.chicksgold.com/accounts');
        cy.visit('https://staging.chicksgold.com/');
        cy.url().should("include", "https://staging.chicksgold.com/");
        
        cy.get(HomePageSelectors.mainContent.powerLeveling).contains(/Power Leveling/i).click({force: true});
        cy.wait(3000)
        cy.url().should("include", 'https://staging.chicksgold.com/services');
        this.returnHome();
        cy.url().should("include", "https://staging.chicksgold.com/");
        
        cy.get(HomePageSelectors.mainContent.goldSwap).contains(/Gold Swap/i).click({force: true});
        cy.wait(3000)
        cy.url().should("include", 'https://staging.chicksgold.com/swap');
        this.returnHome();
        cy.url().should("include", "https://staging.chicksgold.com/");
        
    }
    
    
    clickGameCardContentElements() {
        cy.wait(3000);

        cy.get(HomePageSelectors.gameCardContent.lostArkGold)
        .should('exist')
        .contains(/Lost Ark Gold/i)
        .click({force: true});
        
        cy.wait(3000);
        cy.url().should('include', 'https://staging.chicksgold.com/currency/buy-lost-ark-gold');
        cy.visit('https://staging.chicksgold.com');
        
        cy.get(HomePageSelectors.gameCardContent.lostArkAccounts)
        .should('exist')
        .contains(/Lost Ark Accounts/i)
        .click({force: true});

        cy.wait(3000);
        cy.url().should('include', 'https://staging.chicksgold.com/accounts');
        cy.visit('https://staging.chicksgold.com');

        cy.get(HomePageSelectors.gameCardContent.wowGold)
        .should('exist')
        .contains(/Wow Classic Gold/i)
        .click({force: true});

        cy.wait(3000);
        cy.url().should('include', 'https://staging.chicksgold.com/currency');
        this.returnHome();

        cy.get(HomePageSelectors.gameCardContent.wowAccounts)
        .should('exist')
        .contains(/Wow Classic Accounts/i)
        .click({force: true});

        cy.wait(3000);
        cy.url().should('include', 'https://staging.chicksgold.com/accounts/');
        this.returnHome();
    }


    clickGameCardsElements() {
        cy.wait(3000)

        cy.get(HomePageSelectors.gameCards.lostArk)
        .contains(/Lost Ark/i)
        .should('exist')
        .click({force: true})
        this.returnHome()

        cy.get(HomePageSelectors.gameCards.wowClassic)
        .contains(/Wow/i)
        .should('exist')
        .click({force: true})
        this.returnHome()

        cy.get(HomePageSelectors.gameCards.diabloll)
        .contains(/Diablo II/i)
        .should('exist')
        .click({force: true})
        cy.visit('https://staging.chicksgold.com')
        
        cy.get(HomePageSelectors.gameCards.escapeFromTarkov)
        .contains(/Escape From Tarkov/i)
        .should('exist')
        .click({force: true})
        this.returnHome()

        cy.get(HomePageSelectors.gameCards.finalFantasy)
        .contains(/Final Fantasy XIV/i)
        .should('exist')
        .click({force: true})
        cy.visit('https://staging.chicksgold.com')

        cy.get(HomePageSelectors.gameCards.pathOfExile)
        .contains(/Path Of Exile/i)
        .should('exist')
        .click({force: true})
        this.returnHome()

        cy.get(HomePageSelectors.gameCards.fortnite)
        .contains(/Fortnite/i)
        .should('exist')
        .click({force: true})
    }

    clickCGFooterElements() {
        cy.wait(3000)
        
        cy.get(HomePageSelectors.footer.chicksGold.aboutUS).click({force: true})
        this.returnHome()
        
        cy.get(HomePageSelectors.footer.chicksGold.blog).click({force: true})
        this.returnHome()

        cy.get(HomePageSelectors.footer.chicksGold.bugBounty).click({force: true})
        this.returnHome()
    }

    clickLegalFooterElements() {
        cy.wait(3000)

        cy.get(HomePageSelectors.footer.legal.copyrightPolicy).click({force: true})
        this.returnHome()

        cy.get(HomePageSelectors.footer.legal.privacyPolicy).click({force: true})
        this.returnHome()

        cy.get(HomePageSelectors.footer.legal.termsOfService).click({force: true})
        this.returnHome()
    }

    clickSupportFooterElements() {
        cy.wait(3000)

        cy.get(HomePageSelectors.footer.support.contactUS).click({force: true})
        this.returnHome()

        cy.get(HomePageSelectors.footer.support.faq).click({force: true})
        this.returnHome()

        cy.get(HomePageSelectors.footer.support.siteMap).click({force: true})
        this.returnHome()
    }
        
}

export const homePage = new HomePage;
