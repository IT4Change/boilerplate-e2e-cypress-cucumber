import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import { loginPage } from '../../pages/LoginPage'
import { welcomePage } from '../../pages/WelcomePage'

Given('The web browser is at the login page', () => {
  cy.visit('/login')
})

When('I submit the credentials {string} {string}', (username: string, password: string) => {
  loginPage.submitLogin(username, password)
})

Then('I am on the welcome page', () => {
  cy.get(welcomePage.successMessage).should('be.visible')
  cy.get(welcomePage.WelcomeHeader).should('be.visible')
  cy.get(welcomePage.logoutBtn).should('be.visible')
})
