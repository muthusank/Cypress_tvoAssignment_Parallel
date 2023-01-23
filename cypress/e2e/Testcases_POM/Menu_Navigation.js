
export class MenuNavigation
{
Menu_Navigation()
{
    //Click on Menu Icon
    //cy.get('.jss778').click()
    cy.xpath("(//span[@class='MuiIconButton-label'])[2]").should('be.visible')
    cy.xpath("(//span[@class='MuiIconButton-label'])[2]").should('have.length', 1).click()
    cy.xpath("(//span[@class='MuiIconButton-label'])[2]").screenshot("Menu Icon")
    cy.wait(3000)
}
}