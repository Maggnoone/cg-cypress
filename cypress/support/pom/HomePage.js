import HomePageSelectors from "../../fixtures/homePage.json"


class HomePage {

    returnHome() {
        cy.wait(6000)
        cy.visit('https://staging.chicksgold.com')
        cy.wait(2000)
    }

    hoverNavBarElements() {
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
        this.returnHome()

        cy.get(HomePageSelectors.navBar.items).contains(/Items/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.navBar.accounts).contains(/Accounts/i).click()
        this.returnHome()
        
        cy.get(HomePageSelectors.navBar.services).contains(/Services/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.navBar.more).contains(/More/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.navBar.sell).contains(/Sell/i).click()
        this.returnHome()
    }

    clickMainContentElements() {
        cy.wait(3000)

        cy.get(HomePageSelectors.mainContent.currency).contains(/Currency/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.mainContent.items).contains(/Items/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.mainContent.accounts).contains(/Accounts/i).click()
        this.returnHome()
        
        cy.get(HomePageSelectors.mainContent.powerLeveling).contains(/Power Leveling/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.mainContent.goldSwap).contains(/Gold Swap/i).click()
        this.returnHome()
    }

    clickGameCardContentElements() {
        cy.wait(3000)

        cy.get(HomePageSelectors.gameCardContent.lostArkGold).contains(/Lost Ark Gold/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.gameCardContent.lostArkAccounts).contains(/Lost Ark Accounts/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.gameCardContent.wowGold).contains(/Wow Classic Gold/i).click()
        this.returnHome()
        
        cy.get(HomePageSelectors.gameCardContent.wowAccounts).contains(/Wow Classic Accounts/i).click()
        this.returnHome()
    }

    clickGameCardsElements() {
        cy.wait(3000)

        cy.get(HomePageSelectors.gameCards.lostArk).contains(/Lost Ark/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.gameCards.wowClassic).contains(/Wow/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.gameCards.diabloll).contains(/Diablo II/i).click()
        this.returnHome()
        
        cy.get(HomePageSelectors.gameCards.escapeFromTarkov).contains(/Escape From Tarkov/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.gameCards.finalFantasy).contains(/Final Fantasy XIV/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.gameCards.pathOfExile).contains(/Path Of Exile/i).click()
        this.returnHome()

        cy.get(HomePageSelectors.gameCards.fortnite).contains(/Fortnite/i).click()
        this.returnHome()
    }

    clickCGFooterElements() {
        cy.wait(3000)
        
        cy.get(HomePageSelectors.footer.chicksGold.aboutUS).click({force: true})
        cy.wait(3000)
        
        cy.get(HomePageSelectors.footer.chicksGold.blog).click({force: true})
        cy.wait(3000)

        cy.get(HomePageSelectors.footer.chicksGold.bugBounty).click({force: true})

    }

    clickLegalFooterElements() {
        cy.wait(3000)

        cy.get(HomePageSelectors.footer.legal.copyrightPolicy).click({force: true})
        cy.wait(3000)

        cy.get(HomePageSelectors.footer.legal.privacyPolicy).click({force: true})
        cy.wait(3000)

        cy.get(HomePageSelectors.footer.legal.termsOfService).click({force: true})

    }

    clickSupportFooterElements() {
        cy.wait(3000)

        cy.get(HomePageSelectors.footer.support.contactUS).click({force: true})
        cy.wait(3000)

        cy.get(HomePageSelectors.footer.support.faq).click({force: true})
        cy.wait(3000)

        cy.get(HomePageSelectors.footer.support.siteMap).click({force: true})

    }
        
}

export const homePage = new HomePage;
