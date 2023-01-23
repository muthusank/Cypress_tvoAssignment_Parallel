export class Launchwebsite
{

Application_launch()
{
//Launch tvo website in the Browser
cy.visit(Cypress.env('url'))
//Verify the page title
cy.title().should('eq','TVO Today | Current Affairs Journalism, Documentaries and Podcasts')
cy.screenshot()
cy.wait(2000)
}
}

