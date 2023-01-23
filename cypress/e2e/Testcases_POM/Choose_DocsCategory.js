export class DocsCategory
{
ChooseDocsCategory()
{
//Launch tvo website in the Browser
cy.xpath("//button/span[text()='Docs']").should('have.length', 1).click()
//Verify the page title
cy.title().should('eq','Series & Docs | TVO.org')
cy.xpath("//button/span[text()='Docs']").screenshot("Docs Category")
cy.wait(4000)
}
}